#!/bin/sh
# This wrapper's location identifies closer.html (aka closer.mdtext) as the
# template for mirrors.cgi. ... and now, run the real script:
exec /www/www.apache.org/dyn/mirrors/mirrors.cgi $*
