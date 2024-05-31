
import datetime
# Basic information about the site.
SITENAME = 'Apache Software Foundation'
SITEDESC = 'The main website of the ASF'
SITEDOMAIN = 'www.apache.org'
SITEURL = 'https://www.apache.org'
SITELOGO = 'https://www.apache.org/images/logo.png'
SITEREPOSITORY = 'https://github.com/apache/www-site/blob/main/content/'
CURRENTYEAR = datetime.date.today().year
TRADEMARKS = 'Apache, the Apache feather logo are trademarks'
TIMEZONE = 'UTC'
# Theme includes templates and possibly static files
THEME = 'theme/apache'
# Specify location of plugins, and which to use
PLUGIN_PATHS = [ 'plugins',  ]
# If the website uses any *.ezmd files, include the 'asfreader' plugin
PLUGINS = [ 'gfm', 'asfindex', 'consensual_youtube', 'asfgenid', 'asfdata', 'asfrun', 'asfreader',  ]
# All content is located at '.' (aka content/ )
PAGE_PATHS = [ '.' ]
STATIC_PATHS = [ '.',  ]
# Where to place/link generated pages

PATH_METADATA = '(?P<path_no_ext>.*)\\..*'

PAGE_SAVE_AS = '{path_no_ext}.html'
# Don't try to translate
PAGE_TRANSLATION_ID = None
# Disable unused Pelican features
# N.B. These features are currently unsupported, see https://github.com/apache/infrastructure-pelican/issues/49
FEED_ALL_ATOM = None
INDEX_SAVE_AS = ''
TAGS_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
ARCHIVES_SAVE_AS = ''
# Disable articles by pointing to a (should-be-absent) subdir
ARTICLE_PATHS = [ 'blog' ]
# needed to create blogs page
ARTICLE_URL = 'blog/{slug}.html'
ARTICLE_SAVE_AS = 'blog/{slug}.html'
# Disable all processing of .html files
READERS = { 'html': None, }

# Configure the asfgenid plugin
ASF_GENID = {
 'unsafe_tags': True,
 'metadata': True,
 'elements': True,
 'permalinks': True,
 'tables': True,

 'headings': True,
 'headings_re': '^h[1-4]',


 'toc': True,
 'toc_headers': '^h[1-4]',

 'debug': False,
}



# Configure the asfdata plugin
ASF_DATA = {
 'data': 'asfdata.yaml',
 'metadata': {
 'site_url': SITEURL
 },
 'debug': False,
}


# Configure the asfrun plugin (initialization)
ASF_RUN = [ '/bin/bash get_calendar.sh',  ]


# Configure the asfrun plugin (finalization)
ASF_POSTRUN = [ '/bin/bash pagefind.sh',  ]


# Configure ignore files
IGNORE_FILES = [ 'README.md', 'interviews', 'include', '*.odt',  ]



# Configure the asfindex plugin
ASF_INDEX = {
 'index': '**',
}

