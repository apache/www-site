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

def main():
    member_info = requests.get(MEMBER_INFO).json()
    members = member_info['members']
    ex_members = member_info['ex_members']
    errors = 0
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
                    print(f"Not listed in members: {availid} {name} Status: {ex_members.get(availid, 'Unknown')}")
                    errors += 1
            elif section == 'emeritus':
                if availid != '?' and not availid in ex_members:
                    if availid in members:
                        status = 'ASF Member'
                    else:
                        status = 'Unknown'
                    print(f"Not listed in ex_members: {availid} {name} Status: {status}")
                    errors += 1
    if errors > 0:
        print(f"Detected {errors} error(s). ")
        sys.exit(1)
    else:
        print("No errors detected")

if __name__ == '__main__':
    main()
