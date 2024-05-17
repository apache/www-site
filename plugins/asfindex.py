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
# asfindex.py - Pelican plugin that generates indexes
#

import sys
import os
import os.path
import traceback

import pelican.plugins.signals
import pelican.settings
from pelican.generators import PagesGenerator


# get setting
#  Settings are for the whole pelican environment.
def get_setting(generators, setting):
    try:
        for g in generators:
            if isinstance(g, PagesGenerator):
                return g.settings[setting]
    except Exception:
        return None


# set context
#  Context are the processed settings and other environment which is made available to the JINJA template.
#  Changes to the settings have no effect as those are already copied to each generator's context.
def set_context(generators, setting, value):
    for g in generators:
        if isinstance(g, PagesGenerator):
            g.context[setting] = value
            return value
    return None


# get pages
#  The PagesGenerator has a list of pages. Retrieve a sorted array of page information
def get_pages(generators):
    site_index = []
    for g in generators:
        if isinstance(g, PagesGenerator):
            for p in g.pages:
                # use an absolute path
                save_as = '/' + p.save_as
                if save_as.endswith('/index.html'):
                    # use "/" for the filename of index.html files assuring that they are first in a folder's list
                    save_as = save_as[:-10]
                # extract the path name
                path, _page = os.path.split(save_as)
                site_index.append((path, save_as, p.title))
    site_index.sort()
    return site_index


# get site index
def get_index(site_index, scope):
    current_folder = None
    started = False
    site_listing = ''
    if not scope:
        return
    scoped = False
    if scope != '**':
        scoped = True
    for p in site_index:
        _path, page = os.path.split(p[0])
        folder = page.capitalize()
        if not scoped or (scoped and p[0].startswith(scope)):
            if folder != current_folder:
                if started:
                    site_listing += '</ol>\n'
                started = True
                site_listing += f'<h3><a href="{p[1]}">{p[2]}</a></h3>\n'
                site_listing += '<ol>\n'
                current_folder = folder
            else:
                # menu item for page
                site_listing += f'<li><a href="{p[1]}">{p[2]}</a></li>\n'
    if started:
        site_listing += '</ol>\n'
    return site_listing


# get site menu
# def get_menu(site_index, menus):
#     currrent_menu = None
#     site_menu = ''
#     if menus:
#         for f in menus:
#             path, page = os.path.split(f)
#             folder = page.capitalize()
#             site_menu += '<li class="nav-item active dropdown">\n'
#             site_menu += f'<a class="nav-link dropdown-toggle" href="#" id="dropdown{folder}" '
#             site_menu += f'role="button" data-toggle="dropdown" aria-expanded="false">{folder}</a>\n'
#             site_menu += f'<ul class="dropdown-menu" aria-labelledby="dropdown{folder}">\n'
#             for p in site_index:
#                 if p[0] == f:
#                     # menu item for page
#                     site_menu += f'<li><a class="dropdownitem" href="{p[1]}">{p[2]}</a></li>\n'
#             site_menu += '</ul></li>\n'
#     return site_menu
#
#
# show pages
def show_pages(generators):
    site_index = get_pages(generators)
    asf_index = get_setting(generators, 'ASF_INDEX')
    print(asf_index)
    # Not currently interested in menus this way as it is not generalizable
    # set_context(generators, 'SITE_MENU', get_menu(site_index, asf_index['menus']))
    set_context(generators, 'SITE_INDEX', get_index(site_index, asf_index['index']))


def tb_finalized(generators):
    """ Print any exception, before Pelican chews it into nothingness."""
    try:
        show_pages(generators)
    except Exception:
        print('-----', file=sys.stderr)
        traceback.print_exc()
        # exceptions here stop the build
        raise


def register():
    pelican.plugins.signals.all_generators_finalized.connect(tb_finalized)
