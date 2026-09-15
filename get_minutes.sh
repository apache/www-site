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

# The board's minutes as pages: one per meeting, one per committee, and an index over both.
# Generated from the published record by the Board Agenda Tool and committed to SVN beside
# calendar.md, so this is the same arrangement get_calendar.sh already uses - the tool writes
# markdown into SVN, and the site build renders it with everything else.
#
# Absent is not an error. The tool only writes these once it is switched on to, and that switch is
# thrown after this wiring is in place, so there is a window where the directory does not exist
# yet. Failing hard there would break every build of the whole site over a directory nothing is
# serving from.

MINUTES=https://svn.apache.org/repos/asf/infrastructure/site/trunk/content/foundation/board/minutes

echo "Fetching board minutes from SVN"
cd content/foundation/board || exit

if /usr/bin/svn ls "$MINUTES" > /dev/null 2>&1; then
    /usr/bin/svn export "$MINUTES" --force
else
    echo "Nothing published at $MINUTES yet - skipping"
fi
