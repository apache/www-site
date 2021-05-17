# Dockerfile inspired from https://github.com/boonto/docker-pelican 
# (which is MIT licensed) to build websites with Pelican
#
# To use this, build the container image with
#
#     docker build -t pelican .
#
# And run with
#
#   docker run -it -p8000:8000 -v $PWD:/site -v $PWD/site-generated/:/site-generated pelican -l
#
# which should build the sit, make it available at http://localhost:8000 and rebuild
# if you make changes to the content.
#
FROM python:3.9.5-slim-buster

ARG PELICAN_VERSION=4.6.0
ARG SOURCE_SANS_VERSION=3.028R
ARG MATPLOTLIB_VERSION=3.4.1

RUN apt update && apt upgrade -y
RUN apt install wget unzip fontconfig -y
RUN pip install bs4 requests pyyaml ezt markdown
RUN pip install pelican==${PELICAN_VERSION}
RUN pip install matplotlib==${MATPLOTLIB_VERSION}

WORKDIR /site
RUN mkdir -p /site-generated
ENTRYPOINT ["pelican", "-Dr", "-o", "/site-generated"]
