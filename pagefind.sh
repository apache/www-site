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

# Run pagefind (downloading if necessary)

# Is there already a copy of pagefind?
PAGEFIND=$(PATH=$PATH:. which pagefind)

set -e # fast exit (must be done after 'which' invocation)

if [ -z "$PAGEFIND" ] # could not find pagefind
then
    PAGEFIND_VERSION='1.1.0'
    PAGEFIND_HASH='b20d0b06b54eb2fba1e290245919376364584a456fb644e66eecdb67549b1cf2'
    echo "Download pagefind ${PAGEFIND_VERSION}"
    BINDIR=$(mktemp -d)
    TARGET=${BINDIR}/pagefind.tar.gz
    OS_TYPE=x86_64-unknown-linux-musl
    time wget --quiet -O ${TARGET} https://github.com/CloudCannon/pagefind/releases/download/v${PAGEFIND_VERSION}/pagefind-v${PAGEFIND_VERSION}-${OS_TYPE}.tar.gz
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

echo "Running pagefind on ${PELICAN_OUTPUT_PATH}"
${PAGEFIND} --site ${PELICAN_OUTPUT_PATH} --output-subdir "_pagefind"
