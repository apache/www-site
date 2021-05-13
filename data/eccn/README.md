## ECCN

In this directory there are both the legacy bisnotice and eccn files, and the new one.

## New data file

- [eccnmatrix.json](eccnmatrix.json)

## New process needed

- python script to confirm integrity of edited eccnmatrix.json.
  - [update these instructions](https://infra.apache.org/crypto.html#sources).
- bisnotice.py to create notification email.
  - [follow and update these instructions](https://infra.apache.org/crypto.html#notify) using the new json file.

## Old files to help

- [eccnmatrix.xml](eccnmatrix.xml)
- [eccnmatrix.xsl](eccnmatrix.xsl)
- [bisnotice.xsl](bisnotice.xsl)
- [bisnotice.sh](bisnotice.sh)
- [bisnotice.cmd](bisnotice.cmd)
