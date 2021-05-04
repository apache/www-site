#!/bin/sh
#
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

# tools/convert2md.sh ${1}
# ${1} Path of mdtext file to convert to md file

if test "$#" != 1; then
  echo "USAGE: $0 Type Path"
  exit 1
fi

MDPATH=${1:0:${#1}-4}
echo "Convert "${1}" to "${MDPATH}
awk -f tools/convert2md.awk ${1} > ${MDPATH}

