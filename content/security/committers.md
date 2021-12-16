Title: ASF Project Security for Committers
license: https://www.apache.org/licenses/LICENSE-2.0

## Introduction

Here is guidance for Apache committers on how to handle
security vulnerabilities. The [Apache Security
Team](mailto:security@apache.org) is available to provide help and advice
to Apache projects that require it.

- <a href="#known">Known vulnerabilities</a>
- <a href="#lists">Project-specific security mailing lists</a>
- <a href="#possible">Handling a possible vulnerability</a>
- <a href="#ids">CVE IDs</a>

<h2 id="known">Known vulnerabilities<a class="headerlink" href="#known" title="Permanent link">&para;</a></h2>

Projects with known, published vulnerabilities should provide information
about those vulnerabilities on pages such as the
[httpd security pages](http://httpd.apache.org/security_report.html). Provide a clear link on the project's home page to the
security information pages.

Do not enter details of security vulnerabilities in a project's public bug
tracker unless the necessary configuration is in place to limit access to
the issue to only the reporter and the project team.

<h2 id="lists">Project-specific security mailing lists<a class="headerlink" href="#lists" title="Permanent link">&para;</a></h2>

Projects may wish to create a project-specific security mailing list.
These take the name in the form `security@project.apache.org`, like
`security@tomcat.apache.org`.

When the infrastructure team creates project-specific security mailing lists, they configure them to copy
all messages to `security@apache.org` automatically, so you do not have to
cc `security@apache.org` when sending mail to such a list.

We expect that a subset of project PMC members and committers will
subscribe to the project-specific security mailing list. Do not use the list as a third-party notification system; non-committers should not
be subscribed to such a list.

<h2 id="possible">Handling a possible vulnerability<a class="headerlink" href="#possible" title="Permanent link">&para;</a></h2>

Here is a typical process for handling a possible security vulnerability.
Projects that wish to use other processes **may** do so, but **must** clearly and
publicly document their process and have security@ review it before they begin using it.

**Note:** Do not make information about the vulnerability public until it is formally announced at the end of this process. That means, for example, that you should **NOT** create a Jira ticket to track the issue, since that would make the issue public.
Messages associated with any commits should **not** make ANY reference to the
security nature of the commit.

### Report

The person discovering the issue, the _reporter_, reports the
vulnerability privately to `security@project.apache.org` or to
`security@apache.org`.

The Security team ignores any message to this inbox that does not relate to reporting or managing an
undisclosed security vulnerability in Apache software.

If the report comes to `security@apache.org`, the security team forwards
it to the project's security list or, if the project does not
have a security list, to the project's private (PMC) mailing list.
The security team responds to the original reporter that they have done this.

### Acknowledge

The project team sends an e-mail to the reporter to acknowledge the report, with a copy to `security@project.apache.org` if it exists, or to
`security@apache.org`.

### Investigate

1. The project team investigates the report and either rejects or accepts
it.

1. If the project team **rejects** the report, the team writes to the reporter to
explain why, with a copy to `security@project.apache.org` if it exists, or to
`security@apache.org`.

1. If the project team **accepts** the report, the team writes to the reporter to let them
know that they have accepted the report and that they are working on a fix.

1. The project team requests a CVE (<a href="https://cve.mitre.org/" target="_blank">Common Vulnerabilites and Exposures</a>) ID from the internal portal, `https://cveprocess.apache.org`; or by
sending an e-mail with the subject "CVE request for..." to `security@apache.org`, providing a
short (one-line) description of the vulnerability. `security@apache.org` can
help determine if a report requires multiple CVE IDs or if multiple reports
should be merged under a single ID.

1. The ASF security team allocates a CVE ID for the issue and sends to the project team a link to the
internal portal where the team can enter details of the
vulnerability.

### Resolve

1. The project team agrees on a fix on their private list.

1. The project team documents the details of the vulnerability and the fix on the
internal portal. The portal generates draft announcement texts.  For
an example of an announcement see [Tomcat's announcement of
CVE-2008-2370](http://markmail.org/message/w7mdjdxeqius7d6l). The
level of detail to include in the report is a matter of
judgement. Generally, reports should contain enough information to
enable people to assess the risk the vulnerability poses for
their own system, and no more. Announcments do **not** normally include steps to reproduce the vulnerability.

1. The project team provides the reporter with a copy of the fix and the
draft vulnerability announcement for comment.

1. The project team agrees on the fix, the announcement and the release
schedule with the reporter.

1. The project team commits the fix. Do not make any reference that the commit relates to a security vulnerability.

1. The project team creates a release that includes the fix.

### Announce

The project team announces the vulnerability and the fix. Send the vulnerability
announcement after, or at the same time as, the release announcement to the
following destinations:

1. the same destinations as the release announcement

1. the vulnerability reporter

1. the project's security list (or `security@apache.org` if the project does
not have a dedicated security list)

1. `oss-security@lists.openwall.com` ([subscription not required](http://oss-security.openwall.org/wiki/mailing-lists)).

The internal portal generates texts the project can use for the emails, and can send the emails on behalf of the project.

### Complete

1. The project team updates the project's security page.

1. Set the status of the vulnerability to 'READY' in the internal portal. This notifies the
    security team, which will submit the information to the CVE project. **This is the first point that any information regarding the vulnerability is made public.**

1. If the project repository is in Subversion, add the CVE ID to the log for the commit that applied the fix. Do **not** try to do this if your project uses a Git repository, as editing a pushed commit causes all sorts of problems.

If the project does not have a dedicated `security@project.apache.org`
mailing list, copy all communication regarding the vulnerability to `security@apache.org`. There is no need to do this for messages
sent to `security@project.apache.org` since these are automatically copied to
`security@apache.org`.

Share information about the vulnerability with domain experts (or colleagues at your
employer) at the discretion of the project's security team, providing that
you make clear that the information is not for public disclosure and that you copy to
`security@apache.org` or the project's security mailing list any communication regarding the vulnerability.

<h2 id="ids">CVE IDs<a class="headerlink" href="#ids" title="Permanent link">&para;</a></h2>

[Common Vulnerabilities and Exposures](https://cve.mitre.org/) (CVE)
IDs are unique identifiers given to security flaws.  The Apache
Security Team is a <a href="https://cve.mitre.org/cve/cna.html">CVE Numbering Authority (CNA)</a> covering all Apache projects and is the only
group able to allocate IDs to Apache Software Foundation project issues.

If you believe the details of an issue are described
incorrectly, see the [CVE
FAQ](https://cve.mitre.org/about/faqs.html#b12) for how to contact Mitre, the CVE organization, with corrections.
