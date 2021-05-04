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
# asfdata.py -- Pelican plugin that processes a yaml specification of data into a setting directory
#

from __future__ import unicode_literals

import pelican.plugins.signals
import pelican.utils
import os.path
import requests
import random
import yaml
import json
import ezt

ASF_DATA = {
    'metadata': { },
    'debug': False
}

def read_config(config_yaml):
    with pelican.utils.pelican_open(config_yaml) as text:
        config_data = yaml.load(text)
        print(config_data)
    return config_data


def url_data(url):
    content = requests.get(url).text
    parts = url.split('/')
    extension = os.path.splitext(parts[-1])[1]  # split off ext, keep ext
    print(f"Loading {extension} from {url}")
    if extension == ".json":
        load = json.loads(content)
    elif extension == ".yaml":
        load = yaml.load(content)
    else:
        load = { }
    return load


def remove_part(reference, part):
    for refs in reference:
        if refs == part:
            del reference[part]
            return
        elif isinstance(reference[refs], dict):
            remove_part(reference[refs], part)


def where_parts(reference, part):
    # currently only works on True parts
    filtered = [ ]
    for refs in reference:
        if not reference[refs][part]:
            filtered.append(refs)
    for refs in filtered:
        del reference[refs]


def alpha_part(reference, part):
    for refs in reference:
        name = reference[refs][part]
        if name == 'HTTP Server':
            # when sorting by letter HTTPD Server is wanted first
            letter = ' '
        else:
            letter = name[0].upper()
        reference[refs]['letter'] = letter


def asfid_part(reference, part):
    for refs in reference:
        fix = reference[refs][part]
        for k in fix:
            availid = k
            name = fix[k]['name']
        reference[refs][part] = name
        reference[refs]['availid'] = availid


def sequence_dict(seq, reference):
    sequence = [ ]
    for refs in reference:
        if isinstance(reference[refs],dict):
            reference[refs]['key_id'] = refs
            for item in reference[refs]:
                if isinstance(reference[refs][item],bool):
                    reference[refs][item] = ezt.boolean(reference[refs][item])
            sequence.append(type(seq, (), reference[refs]))
    return sequence


def split_list(metadata, seq, reference, split):
    # copy sequence
    sequence = list(reference)
    # sort the copy
    sequence.sort(key=lambda x: (x.letter, x.display_name))
    # size of list
    size = len(sequence)
    # size of columns
    percol = int((size+26+split-1)/split)
    # positions
    start = nseq = nrow = 0
    letter = ' '
    for column in range(split):
        subsequence = [ ]
        end = min(size+26, start+percol)
        while nrow < end:
            if letter < sequence[nseq].letter:
                # new letter
                letter = sequence[nseq].letter
                subsequence.append(type(seq, (), { 'letter': letter, 'display_name': letter }))
            else:
                subsequence.append(sequence[nseq])
                nseq = nseq+1
            nrow = nrow+1
        # save the column sequence in the metadata
        metadata[f"{seq}_{column}"] = subsequence
        start = end
    if nseq < size:
        print(f"WARNING: {seq} not all of sequence consumed: short {size-nseq} projects")


def process_sequence(metadata, seq, sequence, load, debug):
    reference = load
    is_sequence = False
    save_sequence = True

    # description
    if 'description' in sequence:
        print(f"{seq}: {sequence['description']}")

    # select sub dictionary
    if 'path' in sequence:
        if debug:
            print(f"path: {sequence['path']}")
        parts = sequence['path'].split('.')
        for part in parts:
            reference = reference[part]

    # filter dictionary by attribute value. if filter is false discard
    if 'where' in sequence:
        if debug:
            print(f"where: {sequence['where']}")
        where_parts(reference, sequence['where'])

    # remove irrelevant keys
    if 'trim' in sequence:
        if debug:
            print(f"trim: {sequence['trim']}")
        parts = sequence['trim'].split(',')
        for part in parts:
            remove_part(reference, part)

    # transform roster and chair patterns
    if 'asfid' in sequence:
        if debug:
            print(f"asfid: {sequence['asfid']}")
        asfid_part(reference, sequence['asfid'])

    # add first letter ofr alphabetic categories
    if 'alpha' in sequence:
        if debug:
            print(f"alpha: {sequence['alpha']}")
        alpha_part(reference, sequence['alpha'])

    # this sequence is derived from another sequence
    if 'sequence' in sequence:
        if debug:
            print(f"sequence: {sequence['sequence']}")
        reference = metadata[sequence['sequence']]
        is_sequence = True

    # this sequence is a random sample of another sequence
    if 'random' in sequence:
        if debug:
            print(f"random: {sequence['random']}")
        if is_sequence:
            reference = random.sample(reference, sequence['random'])
        else:
            print(f"{seq} - random requires an existing sequence to sample")

    # this sequence is a sorted list divided into multiple columns
    if 'split' in sequence:
        if debug:
            print(f"split: {sequence['split']}")
        if is_sequence:
            split_list(metadata, seq, reference, sequence['split'])
            save_sequence = False
        else:
            print(f"{seq} - split requires an existing sequence to split")

    # convert the dictionary to a sequence of objects
    if not is_sequence:
        if debug:
            print(f"{seq}: create sequence")
        reference = sequence_dict(seq, reference)

    # save sequence in metadata
    if save_sequence:
        metadata[seq] = reference


def process_load(metadata, value, key, load, debug):
    for seq in value:
        if seq != 'url':
            # sequence
            sequence = value[seq]
            process_sequence(metadata, seq, sequence, load, debug)


def config_read_data(pelican):
    from pelican.settings import DEFAULT_CONFIG

    print("-----\nasfdata")
    DEFAULT_CONFIG.setdefault('ASF_DATA', ASF_DATA)
    if pelican:
        pelican.settings.setdefault('ASF_DATA', ASF_DATA)

        asf_data = pelican.settings.get('ASF_DATA', DEFAULT_CONFIG['ASF_DATA'])
        for key in asf_data:
            print(f"config: [{key}] = {asf_data[key]}")
        
        if 'metadata' in asf_data:
            metadata = asf_data['metadata']
        else:
            metadata = { }
        if 'data' in asf_data:
            print(f"Processing {asf_data['data']}")
            config_data = read_config(asf_data['data'])
            for key in config_data:
                value = config_data[key]
                if isinstance(value, dict):
                    print(f"{key} is a dict")
                    print(value)
                    if 'url' in value:
                        load = url_data(value['url'])
                        process_load(metadata, value, key, load, asf_data['debug'])
                    else:
                        metadata[key] = value
                else:
                    print(f"{key} = {value}")
                    metadata[key] = value

        pelican.settings['ASF_DATA']['metadata'] = metadata
        print("-----")
        for key in metadata:
            print(f"metadata[{key}] =")
            print(metadata[key])
            print("-----")

def register():
    pelican.plugins.signals.initialized.connect(config_read_data)
