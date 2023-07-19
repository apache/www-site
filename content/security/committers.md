Title: ASF Project Security for Committers
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

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
[httpd security pages](https://httpd.apache.org/security_report.html). Provide a clear link on the project's home page to the
security information.

Do not enter details of security vulnerabilities in a project's public bug
tracker unless the necessary configuration is in place to limit access to
the issue to only the reporter and the project team.

<h2 id="lists">Project-specific security mailing lists<a class="headerlink" href="#lists" title="Permanent link">&para;</a></h2>

Projects may wish to create a [project-specific security mailing list](https://security.apache.org/projects/).
These take the name in the form `security@project.apache.org`, like
`security@tomcat.apache.org`.

When the infrastructure team creates project-specific security mailing lists, they configure them to copy
all messages to `security@apache.org` automatically, so you do not have to
cc `security@apache.org` when sending mail to such a list.

We expect that a subset of project PMC members and committers will
subscribe to the project-specific security mailing list. Do not use the list as a third-party notification system; non-committers should not
be subscribed to the list.

<h2 id="possible">Handling a possible vulnerability<a class="headerlink" href="#possible" title="Permanent link">&para;</a></h2>

Here is a typical process for handling a possible security vulnerability.
Projects that wish to use other processes **may** do so, but **must** clearly and
publicly document their process and have `security@apache.org` review it before they begin using it.

### Work in private

Do **not** make information about the vulnerability public until it is formally announced at the end of this process. That means, for example, that you should **not** create a public Jira ticket to track the issue, or a public GitHub issue, since those would make the issue public.
Messages associated with any commits should **not** make any reference to the
security nature of the commit.

### Report

1. The person discovering the issue, the _reporter_, reports the
vulnerability privately to `security@project.apache.org` or to
`security@apache.org`.

2. The Security team ignores any message to this inbox that does not relate to reporting or managing an
undisclosed security vulnerability in Apache software.

3. If the report comes to `security@apache.org`, the security team forwards
it to the project's security list or, if the project does not
have a security list, to the project's private (PMC) mailing list.
The Security Team responds to the original reporter that they have done this.

### Acknowledge

4. The project team sends an e-mail to the original reporter to acknowledge the report, with a copy to `security@project.apache.org` if it exists, or to
`security@apache.org`.

5. The project team investigates the report and either rejects or accepts
it.

6. If the project team **rejects** the report, the team writes to the reporter to
explain why, with a copy to `security@project.apache.org` if it exists, or to
`security@apache.org`.

7. If the project team **accepts** the report, the team writes to the reporter to let them
know that they have accepted the report and that they are working on a fix.

8. The project team requests a CVE (<a href="https://cve.mitre.org/" target="_blank">Common Vulnerabilities and Exposures</a>) ID from the internal portal, `https://cveprocess.apache.org`; or by
sending an e-mail with the subject "CVE request for..." to `security@apache.org`, providing a
short (one-line) description of the vulnerability. `security@apache.org` can
help determine if a report requires multiple CVE IDs or if multiple reports
should be merged under a single CVE ID.

9. The ASF security team allocates a CVE ID and sends to the project team a link to the
internal portal where it can enter details of the
vulnerability.

### Resolve

10. The project team agrees on a fix on their private list.

11. The project team documents the details of the vulnerability and the fix on the
internal portal. The portal generates draft announcement texts.  For
an example of an announcement see [Tomcat's announcement of
CVE-2008-2370](https://markmail.org/message/w7mdjdxeqius7d6l). The
level of detail to include in the report is a matter of
judgement. Generally, reports should contain enough information to
enable people to assess the risk the vulnerability poses for
their own system, and no more. Announcements do not normally include steps to reproduce the vulnerability.

     Optionally, you can put the CVE into the `REVIEW` state to request a
     review from the Security team. You can discuss the disclosure
     using the 'comment' feature, which also sends the comments to the
     relevant private mailing list(s).

12. The project team provides the reporter with a copy of the fix and the
draft vulnerability announcement for comment.

13. The project team agrees on the fix, the announcement, and the
release schedule with the reporter.  If the reporter is unresponsive
in a reasonable timeframe this should not block the project team from
moving to the next steps, particularly if an issue is of high severity
or impact.

14. The project team commits the fix. Do **not** make any reference that the commit relates to a security vulnerability.

15. The project team creates a release that includes the fix.

### Announce

16. After (or at the same time as) the release announcement, the project team announces the vulnerability and the fix.
    Set the CVE status to `READY` in the [internal portal](https://cveprocess.apache.org). You can then use the portal to send the emails.
    The vulnerability announcement should be sent to the following destinations:

    a. the same destinations as the release announcement

    b. the vulnerability reporter

    c. the project's security list (or `security@apache.org` if the project does
not have a dedicated security list)

    d. `oss-security@lists.openwall.com` ([subscription not required](https://oss-security.openwall.org/wiki/mailing-lists)).

This is the first point that any information regarding the vulnerability is made public.

### Complete

17. The project team updates the project's security pages.

18. Add the link to the public announcement on the mailinglist as a 'reference' in the CVE.
    This notifies the security team, which will submit the information to the CVE project.

19. If the project repository is in Subversion, add the CVE ID to the log for the commit that applied the fix. Do **not** try to do this if your project uses a Git repository, as editing a pushed commit causes all sorts of problems.

If the project does not have a dedicated `security@project.apache.org`
mailing list, copy all communication regarding the vulnerability to `security@apache.org`. There is no need to do this for messages
sent to `security@project.apache.org` since these are automatically copied to
`security@apache.org`.

Share information about the vulnerability with domain experts (or colleagues at your
employer) at the discretion of the project's security team, providing that
you make clear that the information is not for public disclosure and that you copy to
`security@apache.org` or the project's security mailing list any communication regarding the vulnerability.

<h2 id="ids">CVE IDs<a class="headerlink" href="#ids" title="Permanent link">&para;</a></h2>

[CVE](https://cve.org/)
IDs are unique identifiers given to security vulnerabilities.  The Apache
Security Team is a <a href="https://www.cve.org/ProgramOrganization/CNAs">CVE Numbering Authority (CNA)</a> covering all Apache projects and is the only
group able to allocate IDs to Apache Software Foundation project issues.

If you believe the details of an issue are described
incorrectly, contact `security@apache.org`.
