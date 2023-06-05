source bin/activate
pip3 list
echo "Fetching calendar from SVN"
cd content/foundation/board || exit
/usr/bin/svn export https://svn.apache.org/repos/asf/infrastructure/site/trunk/content/foundation/board/calendar.md --force
