Title: ASF Security Team

license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

The Apache Security Team provides help and advice to Apache
projects on security issues and coordinates the handling of
security vulnerabilities. 

## Reporting a vulnerability

We strongly encourage you to report potential security vulnerabilities to one of
our private security mailing lists first, before disclosing them in a
public forum.

A [list of security contacts for Apache projects](projects.html) is
available. If you can't find a project-specific security e-mail address and
you have an undisclosed security vulnerability to report, use
the general security address below.

**Only use the security contacts to report undisclosed security vulnerabilities in Apache projects and
manage the process of fixing such vulnerabilities. We cannot accept
regular bug reports or other security-related queries at these addresses.
We will ignore mail sent to these addresses that does not relate to an undisclosed
security problem in an Apache project.** 

**Also note that the security team handles vulnerabilities in Apache projects,
not running ASF services. Send reports of vulnerabilities in ASF
services to root@apache.org. (This includes issues with apache.org websites)**

The general security mailing list address is:
[security@apache.org](mailto:security@apache.org). This is a private
mailing list.

Please send one plain-text email for each vulnerability you are reporting.  We may
ask you to resubmit your report if you send it as an image, movie, HTML, or
PDF attachment when you could as easily describe it with plain text.

You do not need to encrypt submissions, and it takes us longer to respond to encrypted reports.  There is no team key for `security@apache.org`;
instead you can use the OpenPGP keys of the
following subset of members of the Apache Security Team.
Note that this is
not a complete list of Apache Security Team members and that you should not
contact these members individually about security issues.

- Mark Cox - 5B25 45DA B219 95F4 088C  EFAA 36CE E4DE B00C FE33 -
[keys.openpgp.org](https://keys.openpgp.org/search?q=5B2545DAB21995F4088CEFAA36CEE4DEB00CFE33) 
- Bill Rowe - B1B9 6F45 DFBD CCF9 7401 9235 193F 180A B55D 9977 -
[keys.openpgp.org](https://keys.openpgp.org/search?q=B1B96F45DFBDCCF974019235193F180AB55D9977) 
- Mark Thomas - A9C5 DF4D 22E9 9998 D987 5A51 10C0 1C5A 2F60 59E7 -
[keys.openpgp.org](https://keys.openpgp.org/search?q=A9C5DF4D22E99998D9875A5110C01C5A2F6059E7) 
- Yann Ylavic - 8935 9267 45E1 CE7E 3ED7  48F6 EC99 EE26 7EB5 F61A -
[keys.openpgp.org](https://keys.openpgp.org/search?q=8935926745E1CE7E3ED748F6EC99EE267EB5F61A) 

You can obtain these public keys [in a single file](KEYS.txt).

## Vulnerability Information

You can usually find information on known vulnerabilities for an Apache project on the project's web pages. For convenience, consult the [list of
security information pages for Apache projects](projects.html). If you can't find the information you are looking for on the
project's web site, ask your question on the project's `users` mailing list. Do **not** ask the security contacts directly about:

- how to configure the package securely

- whether a published vulnerability applies to specific versions of the Apache
packages you are using

- whether a published vulnerability applies to the configuration of the Apache
packages you are using

- obtaining further information on a published vulnerability

- the availability of patches and/or new releases to address a published
vulnerability

The relevant project's `users` list is the place to ask such questions. The Apache Security Team and any project security
team will ignore any such questions you send directly to them.

## Vulnerability handling

An overview of the vulnerability handling process is:

- The reporter reports the vulnerability privately to Apache.

- The appropriate project's security team works privately with the reporter
to resolve the vulnerability.

- The project creates a new release of the package the vulnerabilty affects to deliver its fix.

- The project publicly announces the vulnerability and describes how to apply the fix.

Committers should read a [more detailed description of the process](committers.html). Reporters of security vulnerabilities may also find
it useful.
