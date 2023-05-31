if fgrep "TAGS_SAVE_AS = 'tags.html'" pelican.auto.py
then
    echo "=======Already updated=============="
else
    echo "=======Hack: enabling tags==============="
    cat >>pelican.auto.py <<EOD
TAGS_SAVE_AS = 'tags.html'
TAG_SAVE_AS = 'tag.html'
EOD
fi

echo "Fetching calendar from SVN"
cd content/foundation/board || exit
/usr/bin/svn export https://svn.apache.org/repos/asf/infrastructure/site/trunk/content/foundation/board/calendar.md --force
