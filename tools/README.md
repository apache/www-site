# Tools

- [`convert2md.sh`](convert2md.sh) - shell script converts a mdtext file to md
- [`convert2md.awk`](convert2md.awk) - awk script used by `convert2md.sh` to convert a mdtext file to md

```sh
find content -name "*.mdtext" -exec tools/convert2md.sh {} \;
```
