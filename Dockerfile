# Dockerfile to build the www-site with Pelican.
# Inspired from https://github.com/boonto/docker-pelican
# (which is MIT licensed) for the Pelican-specific bits.
#
# To use this, build the container image with
#
#     docker build -t www-site .
#
# And run with
#
#   docker run -it -p8000:8000 -v $PWD:/site -v $PWD/site-generated/:/site-generated www-site
#
# which should build the site, make it available at http://localhost:8000 and rebuild
# if you make changes to the content.
#
FROM python:3.9.5-slim-buster

ARG PELICAN_VERSION=4.6.0
ARG SOURCE_SANS_VERSION=3.028R
ARG MATPLOTLIB_VERSION=3.4.1

# Standard Pelican stuff
RUN apt update && apt upgrade -y
RUN apt install wget unzip fontconfig -y
RUN pip install bs4 requests pyyaml ezt markdown
RUN pip install pelican==${PELICAN_VERSION}
RUN pip install matplotlib==${MATPLOTLIB_VERSION}

# CMark prerequisites
RUN apt install -y git curl cmake build-essential

# Build CMark
WORKDIR /tmp/build-cmark
RUN git clone --depth 1 https://github.com/apache/infrastructure-pelican.git
RUN ./infrastructure-pelican/bin/build-cmark.sh | grep LIBCMARKDIR > LIBCMARKDIR.sh
RUN chmod +x LIBCMARKDIR.sh

# Pelican setup
WORKDIR /site
RUN mkdir pelican-gfm
RUN cp /tmp/build-cmark/infrastructure-pelican/gfm.py pelican-gfm/
RUN ( echo "#!/usr/bin/environment python -B" ; echo "from .gfm import *" ) > pelican-gfm/__init__.py
RUN mkdir -p /site-generated

ENTRYPOINT [ "/bin/bash", "-c", "source /tmp/build-cmark/LIBCMARKDIR.sh && pelican -Dr -o /site-generated -b 0.0.0.0 -l" ]