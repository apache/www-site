#!/usr/bin/env python3

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

# Check contents of members.md to ensure entries are valid ids and in the correct section
# Intended to be run by a GitHub Action, but can also be run from a local checkout

import sys
import requests

MEMBER_INFO = 'https://whimsy.apache.org/public/member-info.json'
MEMBERS_MD ='content/foundation/members.md'

def main(failOnWarn=False):
    member_info = requests.get(MEMBER_INFO).json()
    members = member_info['members']
    ex_members = member_info['ex_members']
    errors = 0
    warnings = 0
    with open(MEMBERS_MD, 'r', encoding='utf-8') as md:
        section = None
        for line in md:
            if line.startswith('| Id | Name | Projects |'):
                section = 'members'
                print("Checking members section")
                continue
            elif line.startswith('| Id | Name |'):
                section = 'emeritus'
                print("Checking emeritus section")
                continue
            elif len(line.strip()) == 0:
                section = None
                continue
            elif line.startswith('|---'):
                continue
            if section is None:
                continue
            if not line.startswith('| '):
                print("Unexpected format:")
                print(line.strip())
                errors += 1
            parts = line.strip().split('|')
            parts.pop(0)
            availid = parts.pop(0).strip()
            name = parts.pop(0).strip()
            if section == 'members':
                if not availid in members:
                    level = ''
                    if availid in ex_members:
                        status = f"is listed in Whimsy with status '{ex_members.get(availid)}'"
                        warnings += 1
                        level = 'WARNING'
                    else:
                        status = "was not found in Whimsy"
                        errors += 1
                        level = 'ERROR'
                    print(f"{level}: '{availid}' ({name}) is listed in the 'members' section of `content/foundation/members.md`, but {status}")
            elif section == 'emeritus':
                if availid != '?' and not availid in ex_members:
                    if availid in members:
                        status = "is listed in Whimsy as an ASF Member"
                        warnings += 1
                        level = 'WARNING'
                    else:
                        status = "was not found in Whimsy"
                        errors += 1
                        level = 'ERROR'
                    print(f"{level}: '{availid}' ({name}) is listed in the 'emeritus' section of `content/foundation/members.md`, but {status}")
    print(f"Detected {errors} error(s) and {warnings} warnings. ")
    if errors > 0:
        print("Errors detected, failing")
        sys.exit(1)
    elif warnings > 0:
        if failOnWarn:
            print("Warnings detected, failing")
        else:
            print("Warnings detected")
    else:
        print("No errors or warnings detected")

if __name__ == '__main__':
    main(len(sys.argv) >1 and sys.argv[1] == 'failOnWarn')
