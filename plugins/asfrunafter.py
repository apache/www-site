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
# asfrunafter.py - Pelican plugin that runs shell scripts just before termination
#

import os
import sys
import subprocess
import shlex
import traceback
import yaml

import pelican.plugins.signals
import pelican.settings

AUTO_SETTINGS_YAML = 'pelicanconf.yaml'

# open a subprocess
def os_run(args, env=None):
    return subprocess.Popen(args, env=env, stdout=subprocess.PIPE, universal_newlines=True)


# run shell
def run_script(pel_ob):
    asfyaml = yaml.safe_load(open(AUTO_SETTINGS_YAML))

    asf_runafter = asfyaml.get('setup').get('runafter')
    if asf_runafter:
        print('-----\nasfrunafter')
        # copy the pelican environment
        my_env = os.environ.copy()
        for k,v in sorted(pel_ob.settings.items()):
            if k != 'ASF_DATA': # rather large; not needed
                my_env['PELICAN_'+k] = str(v)

        for command in asf_runafter:
            print(f'-----\n{command}')
            args = shlex.split(command)
            with os_run(args, my_env) as s:
                for line in s.stdout:
                    line = line.strip()
                    print(f'{line}')
    else: # debug
        print('WARNING: failed to find runafter setting')
        for k,v in sorted(pel_ob.settings.items()):
            if k == 'ASF_DATA': # rather large
                print(k)
            else:
                print(k, v)

def tb_finalized(pel_ob):
    """ Print any exception, before Pelican chews it into nothingness."""
    try:
        run_script(pel_ob)
    except Exception:
        print('-----', file=sys.stderr)
        traceback.print_exc()
        # exceptions here stop the build
        raise


def register():
    pelican.plugins.signals.finalized.connect(tb_finalized)
