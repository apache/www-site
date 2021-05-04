#!/bin/sh
# This wrapper's location identifies closer.html (aka closer.mdtext) as the
# template for mirrors.cgi. ... and now, run the real script:
export MIRRORS_LIST=/x1/www/www.apache.org/mirrors/ooo-mirrors.list
exec ./mirrors/mirrors.cgi $*
