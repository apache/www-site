(If you are looking for instructions about how to use the Ads server
to help promote ApacheCon, then see http://apache.org/ads/adserver.txt)

-------------------------------------------------
How to generate the images for future conferences
-------------------------------------------------
This enables a basic image to be available ASAP. If someone wants to create a
better replacement for a particular image then go ahead (talk to concom@).

See https://svn.apache.org/repos/asf/forrest/trunk/tools/logos/README.txt

Save the images in SVN in the xdocs/ads/ApacheCon directory
using the naming convention like: 2007-europe-125x125.png

Now add and commit the two sets of new files.
Make sure they have the correct mime-type, e.g.
 
     svn:mime-type    image/gif
     svn:mime-type    image/jpeg
     svn:mime-type    image/png


After checking in files, be sure to publish the site using the CMS system:
  http://www.apache.org/dev/cms.html

Please consider uploading an SVG version of the image, too, in case this is
used somewhere on a printed medium.

Note: This can only be done by someone in the apsite group, e.g. ASF members.
