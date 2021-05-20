# Apache Theme

The Apache Theme included here consists two types of files.

1. Page templates.
2. CSS stylesheets.

## Page Templates

1. base.html - the main template. Other templates extend this template automatically even those in the default pelican thme.
2. page.html - this overrides pelican's default page.html which includes `<h1>{{ page.title }}</h1>`. We don't want that behavior.

Change the base page as necessary and add new page types as required.

## CSS Stylesheets

These are site or template specific overrides to the stylesheet frameworks.
You can choose to include these in your template, or you can move the file into your assets.

1. styles.css - consists of custom site CSS overrides. Edit as needed. Here we inlcude the css for our style of permalink.

Each of the above files should be edited as needed for the deployed website.

## Pelican Settings

Pelican settings are provided in the [pelicanconf.py](../../../pelicanconf.py) file.

Some settings inlude:

~~~python
SITEURL = 'https://www.apache.org'
SITEREPOSITORY = 'https://github.com/apache/www-site/blob/main/content/'
CURRENTYEAR = date.today().year
~~~

The file contains helpful comments about the settings.

## Pelican Themes

This is a [custom theme][1]. Pelican templates use [Jinja][2]

## History - Apache CMS

The [svn history](http://svn.apache.org/viewvc/infrastructure/site/trunk/templates) was not migrated and remains available.


[1] https://docs.getpelican.com/en/latest/themes.html
[2] https://jinja.palletsprojects.com/en/3.0.x/