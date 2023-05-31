AUTOCONF='/tmp/www/pelican.auto.py'
if -r ${AUTOCONF}
then
    if fgrep "TAGS_SAVE_AS = 'tags.html'" ${AUTOCONF}
    then
        echo "=======Already updated=============="
    else
        echo "=======Hack: enabling tags==============="
        cat >>${AUTOCONF} <<EOD
TAGS_SAVE_AS = 'tags.html'
TAG_SAVE_AS = 'tag.html'
EOD
    fi
else
    echo "Cannot find ${AUTOCONF}"
fi
source bin/activate
pip3 list
echo "Fetching calendar from SVN"
cd content/foundation/board || exit
/usr/bin/svn export https://svn.apache.org/repos/asf/infrastructure/site/trunk/content/foundation/board/calendar.md --force
