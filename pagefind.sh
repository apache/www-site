#!/usr/bin/env bash

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

# Download and run pagefind

echo "Debug"
python --version
pelican --version

ls -l
ls -l bin

source bin/activate
pip3 list

pwd
env

#

set -e # fast exit

# Is there already a copy of pagefind?
PAGEFIND=$(PATH=$PATH:. which pagefind)
if [ -z "$PAGEFIND" ]
then
    echo "Download pagefind"
    PAGEFIND_VERSION='0.12.0'
    PAGEFIND_HASH='3e450176562b65359f855c04894ec2c07ffd30a8d08ef4d5812f8d3469d7a58f'
    BINDIR=$(mktemp -d)
    TARGET=${BINDIR}/pagefind.tar.gz
    wget --no-verbose -O ${TARGET} https://github.com/CloudCannon/pagefind/releases/download/v${PAGEFIND_VERSION}/pagefind-v${PAGEFIND_VERSION}-x86_64-unknown-linux-musl.tar.gz
    echo "${PAGEFIND_HASH}  ${TARGET}" > ${TARGET}.sha256
    if shasum -a 256 -c ${TARGET}.sha256
    then
        tar -C ${BINDIR} -xkf ${TARGET}
    else
        echo "Failed to download pagefind correctly"
        exit 1
    fi
    PAGEFIND=${BINDIR}/pagefind
fi

echo "Running pagefind"
${PAGEFIND} --source ${PELICAN_OUTPUT_PATH:-site-generated}
