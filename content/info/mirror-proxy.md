Title: Mirroring Using Apache HTTP Server Version 2.2 (experimental)
license: https://www.apache.org/licenses/LICENSE-2.0

**These instructions are currently experimental ; not for production.** 

If you are using version 2.2 or greater of the Apache HTTP Server for your
mirror, you can try to mirror using a cached reverse proxy in
place of rsync. This configuration minimizes resource usage both for you
and for our servers and also assures that our users can immediately access
new files.

Before using this configuration, please assure that your server includes
the modules
[mod_cache](http://httpd.apache.org/docs/2.2/mod/mod_cache.html) and
[mod_disk_cache](http://httpd.apache.org/docs/2.2/mod/mod_disk_cache.html).
Then the following directives should be added to `httpd.conf` either in the
main server context or inside a `<VirtualHost>` :

    CacheRoot /usr/local/apache2/var/apachecache
    CacheEnable disk /apache
    ProxyPass /apache http://www.apache.org/dist
    ProxyPassReverse /apache http://www.apache.org/dist

The directory `/usr/local/apache2/var/apachecache` can be replaced with any
directory **that is writable by the User/Group specified in httpd.conf**.
The path `/apache` can be changed as needed for your site. In this
configuration, the site will be accessed as
`http://yoursite.example.com/apache/`. You may even replace this with `/`
if you run your mirror on its own virtual host.

To control disk space usage on your mirror, you should run
[htcacheclean](http://httpd.apache.org/docs/2.2/programs/htcacheclean.html)
from cron. Please allow at least 5120MB.

Once this is configured and tested, please notify us using the instructions
on the [How to mirror](/info/how-to-mirror.html) page.

