Title: Apache Download Mirrors
Base: https://www.apache.org/dyn/closer.cgi
license: https://www.apache.org/licenses/LICENSE-2.0

[if-any logo] <a href="[link]">![[logo]]([logo])</a> [end] We suggest the following mirror
site for your download:

[**[preferred][path_info]**]([preferred][path_info]) 

Other mirror sites are suggested below.

It is essential that you [verify the integrity](#verify) of the downloaded file using
the PGP signature (`.asc` file) or a hash (`.md5` or `.sha*` file).

Please only use the backup mirrors to download KEYS, PGP signatures and hashes (SHA* etc)
-- or if no other mirrors are working.

[if-any http]

# HTTP  {#http}

[for http] [**[http][path_info]**]([http][path_info]) <br></br>[end]

[end]

[if-any ftp]

# FTP  {#ftp}

[for ftp] [**[ftp][path_info]**]([ftp][path_info]) <br></br>[end]

[end]

# Backup Sites  {#backup}

Please only use the backup mirrors to download KEYS, PGP signatures and hashes (SHA* etc)
-- or if no other mirrors are working.

[if-any backup] [for backup] [**[backup][path_info]**]([backup][path_info]) <br></br>[end] [end]

The [full listing of mirror sites](http://www.apache.org/mirrors/) is also
available.

# Becoming a mirror  {#become}

The procedure for setting up new mirrors is described in [How to become a
mirror](http://www.apache.org/info/how-to-mirror.html).

# Verify the integrity of the files  {#verify}

It is essential that you verify the integrity of the downloaded file using
the PGP signature (`.asc` file) or a hash (`.md5` or `.sha*` file). Please read [Verifying Apache Software
Foundation Releases](/info/verification.html) for more information on why
you should verify our releases.

The PGP signature can be verified using PGP or GPG. First download the
`KEYS` as well as the `asc` signature file for the relevant distribution.
Make sure you get these files from the main distribution site, rather than
from a mirror. Then verify the signatures using

    % gpg --import KEYS
    % gpg --verify downloaded_file.asc downloaded_file

*or*

    % pgpk -a KEYS
    % pgpv downloaded_file.asc

*or*

    % pgp -ka KEYS
    % pgp downloaded_file.asc

Alternatively, you can verify the hash on the file.

Hashes can be calculated using GPG:

    % gpg --print-md SHA256 downloaded_file

The output should be compared with the contents of the SHA256 file.
Similarly for other hashes (SHA512, SHA1, MD5 etc) which may be provided.
     
Windows 7 and later systems should all now have certUtil:

    % certUtil -hashfile pathToFileToCheck [HashAlgorithm]

HashAlgorithm choices: MD2 MD4 MD5 SHA1 SHA256 SHA384 SHA512

Unix-like systems (and macOS) will have a utility called
md5, md5sum or shasum
