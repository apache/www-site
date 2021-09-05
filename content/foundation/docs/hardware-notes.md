Title: Hardware Notes
license: https://www.apache.org/licenses/LICENSE-2.0

# Reporting Problems #

- If the problem is fatal to non-developers (e.g., any of the major daemons
being down SMTP, HTTP, etc) send a note to noc@collab.net, which will act
upon it as quickly as possible. If you don't get a response within 10-15
minutes, as a backup call Brian Behlendorf via cell phone, which any
ASF member can get for you.

- If the problem is fatal only to developers (e.g., CVS commits are hosed,
ssh access is screwy) please send a note to committers@apache.org. If it
doesn't require root to fix, ideally someone can then leap in and fix it,
with those with root ultimately responsible for fixing the problem.

# Customizations to apache.org beyond a stock FreeBSD 4.2 installation #

- Using "vnode" memory filesystem proposed by Tony Finch. this is now in
/etc/rc.local: `
vnconfig -e -s labels,reserve -S 200m vn0
disklabel -r -w vn0 auto
newfs -i 1024 /dev/vn0c
mount /dev/vn0c /tmp
chmod a+w /tmp
chmod +t /tmp
` 
The -i 1024 to newfs is important, as cvs likes to create a lot of small
files.

- Put "vfs.vmiodirenable=1" into /etc/rc.sysctl as a speed tweak.

- Put "kern.timecounter.method=1" into /etc/rc.sysctl to address bind
problem.

- Make *sure* that fxp0 is set to "100baseTX &lt;full-duplex&gt;" by using
"media 100baseTX mediaopt full-duplex" in the call to ifconfig.

much much more to come, I just needed a common place to start collecting
anecdotal data.

