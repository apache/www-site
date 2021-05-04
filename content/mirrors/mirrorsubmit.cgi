#!/usr/bin/perl
#
# Author: Andrew Kenna
#
# Email: andrewk@apache.org
#
# Program written specifically for Apache Software Foundation
#
# (c), Apache Software Foundation 2002
#
require "cgi-lib.pl";
&ReadParse(*in);
$name = $in{'name'};
$email = $in{'emailaddress'};
$country = $in{'country'};
$http = $in{'httplocal'};
$ftp  = $in{'ftplocal'};
$rsync = $in{'rsynclocal'};
$emailaddress = "mirror-submit\@apache.org";
print "Content-type: text/html\n\n";
&send_email();
&display_details();

sub send_email() { 
open(SENDMAIL, "|/usr/sbin/sendmail -t $emailaddress");
print SENDMAIL "From: mirrors\@apache.org\n";
print SENDMAIL "Subject: Request for addition to Mirrors List\n";
print SENDMAIL "http\t$country\t$http\t$email\n";
print SENDMAIL "ftp\t$country\t$ftp\t$email\n";
if ($rsync eq "") { 
 $rsync = "Not Available";
}
print SENDMAIL "rsync\t$country\t$rsync\t$email\n";
print SENDMAIL "\n\n Please refer to the countries.list file on daedalus to convert the\n";
print SENDMAIL "Country Name into a country code for the mirrors.list file\n";
close(SENDMAIL);
}
sub display_details() { 
print "<html><title> Apache Mirror Request</title>\n";
print "<body>
        <center><h1> Apache Mirror Submit </h1></center>
<hr>
Your request has been sent off to the mirror maintainers, providing your website is viewable at the time
of testing your web site will be added to the official list.
<p><hr>
<a href=\"http://www.apache.org/\"> Return to the Apache Homepage </a>
\n";
print "</body></html>\n";
}

