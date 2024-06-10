Title: ASF Security Team
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

The Apache Security Team guides Apache projects on security issues 
and coordinates the handling of all security vulnerabilities. The team 
is a CVE Numbering Authority (CNA) covering all Apache projects and is 
the only group able to allocate IDs to Apache Software Foundation project 
issues. Advisories are published per project, and may be reviewed via 
the [project advisories](https://security.apache.org/projects/).

## Reporting a vulnerability

We strongly encourage you to report potential security vulnerabilities to one of
our private security mailing lists first, before disclosing them in a
public forum.

A [list of security contacts for Apache projects](https://security.apache.org/projects/) is
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

Please send one plain-text, unencrypted, email for each vulnerability you are reporting.  We may
ask you to resubmit your report if you send it as an image, movie, HTML, or
PDF attachment when you could as easily describe it with plain text.

## Issues not considered as security vulnerabilities {#known-issues}

These are things that we are well aware of, and have been reported to us many
times, but we do not class as a security vulnerability.
Please do not report them.

Issues not classed as security relevant:

- A lack of DMARC or SPF record on our domains
- "Clickjacking" on our domains
- Directory listings.  These are deliberate and do not contain sensitive information
- Systems that disclose the versions of the servers and software we use
- Data that is publically accessible in our JIRA bug tracking system

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

- The project creates a new release of the package the vulnerability affects to deliver its fix.

- The project publicly announces the vulnerability and describes how to apply the fix.

Committers should read a [more detailed description of the process](committers.html). Reporters of security vulnerabilities may also find
it useful.


## Discussion

Committers and Security Researchers are encouraged to join our [community discuss list](https://lists.apache.org/list.html?security-discuss@community.apache.org).
