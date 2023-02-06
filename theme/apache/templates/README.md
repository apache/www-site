# Apache Theme

The Apache Theme included here consists two types of files.

- Page templates.
- CSS stylesheets.

## Page Templates

- base.html - the main template. Other templates extend this template automatically even those in the default pelican theme.
- page.html - this overrides pelican's default/simple page.html which includes `<h1>{{ page.title }}</h1>`.
  We don't want that behavior.

Change `base.html` as necessary. Add new override templates if required.
See [Pelican documentation](https://docs.getpelican.com/en/latest/themes.html#inheritance) about inheritance from the simple theme.

## CSS Stylesheets

In this site the css included by `base.html` is found in the `content` tree.
There are site or template specific overrides to the stylesheet frameworks, but these are not done as Pelican specifies.

- styles.css - consists of custom site CSS overrides. Edit as needed. Here we include the css for the ASF permalink style.
  This file is in the same directory as the html and is included inline with `{% include "styles.css" %}`

## Page Metadata

This theme uses the following metadata:

- Title. Used in `base.html` with `<title>{{ page.title }}</title>` to provide the page title.

- Notice. This is notice text which is typically a link to the license.

  `{% if page.notice %}<!-- {{ page.notice }} -->{% endif %}`

- License. This is an alternative to Notice.

- bodytag. This adds attributes to the `<body>` element.
  This is allows the main `index.ezmd` to have the same template, but with differing layout.

  `<body{% if page.bodytag %} {{ page.bodytag }}{% endif %} >`   

## Pelican Settings

Pelican settings are provided in the [pelicanconf.yaml](../../../pelicanconf.yaml) file:

```
site:
  name: Apache Software Foundation
  description: The main website of the ASF 
  domain: www.apache.org
  logo: images/logo.png
  repository: https://github.com/apache/www-site/blob/main/content/
  trademarks: Apache, the Apache feather logo are trademarks
  index: '**'
```


- In `base.html`, `CURRENTYEAR` is used in the copyright statement.

  `Copyright &#169; {{ CURRENTYEAR }} The Apache Software Foundation`


## Pelican Themes

This is a [custom theme][1]. Pelican templates use [Jinja][2]

## History - Apache CMS

The [svn history](http://svn.apache.org/viewvc/infrastructure/site/trunk/templates) was not migrated and remains available.


[1]: https://docs.getpelican.com/en/latest/themes.html
[2]: https://jinja.palletsprojects.com/en/3.0.x/
