# Apache Theme

The Apache Theme included here consists two types of files.

1. Page templates.
  There should be one template for each page type.
2. CSS stylesheets.
  There are css overrides for the site and/or template.

## Page Templates

1. base.html - there is only one page type.

Change the base page as necessary and add new page types as required.

## CSS Stylesheets

These are site or template specific overrides to the stylesheet frameworks.
You can choose to include these in your template, or you can move the file into your assets.

1. styles.css - consists of custom site CSS overrides. Edit as needed.

See [Web Developer](../../../DEVELOPER.md) for framework and other information.

Each of the above files should be edited as needed for the deployed website.

## Pelican Variables set in [pelicanconf.py](../../../pelicanconf.py)

~~~python
SITENAME = u'Apache <pmc>'
SITEDOMAIN = '<pmc>.apache.org'
SITEURL = 'https://<pmc>.apache.org'
SITELOGO = 'https://<pmc>.apache.org/images/logo.png'
SITEDESC = u'<pmc desc>'
SITEREPOSITORY = 'https://github.com/apache/<pmc-site>/blob/<branch>/content/'
TRADEMARKS = u'Apache, the Apache feather logo, and <pmc> are trademarks or registered trademarks'
CURRENTYEAR = date.today().year
~~~
