#!/usr/bin/python -B
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
#
# consensual_youtube.py -- Pelican plugin that supports postponing loading
# youtube resources until the user explicitly opts into playing the video
#
# Include a YouTube video with a 'youtube' tag and a youtube_id attribute:
#
#   <youtube youtube_id="GU0SV_2tWkU"/>
#
# You can specify the 'id' to make it easier to apply additional CSS. This id
# will also be carried over to the iframe when the div is replaced.
#
# The preview image will be taken from `img/{youtube_id}.jpg` in your content
# folder. If no preview image is found there, it will be fetched from youtube
# at site generation time.
from os import path

from urllib import request

from pelican import contents, signals

from bs4 import BeautifulSoup

CSS_STYLE = '''
    .yt-container {
        background-size: cover;
        background-position: center;
    }

    .yt-notice {
        padding: 0.5em;
        color: black;
        background-color: white;
    }
    .yt-notice::after {
        content: "Clicking to play this video establishes a connection with YouTube";
    }
'''

JS_SCRIPT = '''
    var cachedPromise;
    function loadScript() {
        cachedPromise = cachedPromise || new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.src = 'https://www.youtube.com/iframe_api';
            script.addEventListener('load', resolve);
            script.addEventListener('error', (e) => reject(e));
            document.body.appendChild(script);
        });
        return cachedPromise;
    }

    function startPlayer(id, youtube_id) {
        loadScript().then(() => {
            window.YT.ready(function() {
                let player = new YT.Player(id, {
                videoId: youtube_id,
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': (event) => {
                        event.target.playVideo();
                    }
                }
                });
            });
        });
    }
    function addElement(e) {
        startPlayer(e.target.id, e.target.attributes['youtube_id'].value);
    }
    document
      .querySelectorAll('.yt-container')
      .forEach((video) => video.addEventListener('click', addElement))
'''

def generate_youtube(content):
    if isinstance(content, contents.Static):
        return
    soup = BeautifulSoup(content._content, 'html.parser') # pylint: disable=protected-access
    tags = soup.find_all('youtube')

    if not tags:
        return

    style = soup.new_tag('style')
    style.append(CSS_STYLE)
    soup.append(style)

    script = soup.new_tag('script')
    script.append(JS_SCRIPT)
    soup.append(script)

    for tag in tags:
        replace_tag(content.settings['PATH'], content.settings['OUTPUT_PATH'], soup, tag)

    content._content = soup.decode(formatter='html') # pylint: disable=protected-access

def replace_tag(input_path, output_path, soup, tag):
    tag.name = 'div'

    if not tag.has_attr('youtube_id'):
        raise ValueError('Attribute "youtube_id" is mandatory for "youtube" tags')

    yt_id = tag['youtube_id']

    # If a preview file is present in the input content directory,
    # use that and rely on Pelican to copy it to the output. If not,
    # fetch it from YouTube at site generation time and place it
    # straight into the output directory:
    preview = f'/img/yt_preview_{yt_id}.jpg'
    if not path.isfile(input_path + preview):
        request.urlretrieve(f'https://img.youtube.com/vi/{yt_id}/0.jpg',
                            output_path + preview)

    # Default YouTube player size is 360p:
    player_width = 640
    player_height = 360

    if not tag.has_attr('id'):
        tag['id'] = f'yt-container-{yt_id}'

    tag['class'] = 'yt-container'
    tag['style'] = f"background-image: url('{preview}'); width: {player_width}px; height: {player_height}px;"

    warning = soup.new_tag('div')
    warning['class'] = "yt-notice"
    tag.append(warning)

def register():
    signals.content_object_init.connect(generate_youtube)
