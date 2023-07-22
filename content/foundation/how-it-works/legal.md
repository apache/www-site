Title: ASF Development Process
Atom: http://mail-archives.apache.org/mod_mbox/www-legal-discuss/?format=atom
Notice: http://www.apache.org/licenses/LICENSE-2.0

# {{title}}

## Purpose and Intended Audience

This explains the Apache development process, with a focus on the legal
side of things. It's primarily intended for those who are interested in
what the ASF do to manage the ownership of their products.

### Contributions

Contributions are covered by the Apache License. See the license's
[Definitions](/licenses/LICENSE-2.0.html#definitions) of the terms
"Contribution" and "Contributor" and the condition " [Submission of
Contributions](/licenses/LICENSE-2.0.html#contributions) ". As explained
there, if a submission is intended to be "Not a Contribution", then it
needs to be conspicuously marked as such.

### Incoming code

Source code enters the foundation in one of the following ways:

1. An existing third party project joining Apache

1. A large one off code contribution

1. Repeated contributions applied directly to the source

1. Patches contributed via the issue trackers

1. Small patches contributed via the mailing lists

Each of these methods has its own process:

1. Existing third party projects join through the Apache Incubator project.
All copyright holders have to sign [Contributor License
Agreements](/licenses/#clas) or [Software Grants](/licenses/#grants) , and
project names are checked for trademark issues. CLAs tend to be for
individuals who will continue to develop the software, while grants are for
individuals or companies who will not be direct committers. You can learn
more about that process at the [Incubator](http://incubator.apache.org/).

1. One off code donations can come in through a [software
grant](/licenses/software-grant.txt). You can see list of such grants at
the [IP Clearance
page](http://incubator.apache.org/ip-clearance/index.html).

1. Individuals who want to directly contribute to the project sign an
[Individual Contributor License Agreement](/licenses/icla.txt) (CLA).
Sometimes they and their employer will also want to sign a separte
[Corporate CLA](/licenses/cla-corporate.txt) with the ASF, depending on the
situation. Usually these contributions take the effect of commits to the
source code repository, another example is updating the project website and
documentation through a content management system.

1. Patches provided via the JIRA issue tracker can select a checkbox to
indicate that the 'Attachment not intended for inclusion'. In Bugzilla this
must be entered in the patches' comment field.

1. Patches contributed via mailing lists are expected to be simple. The
same applies for inline comments in the issue trackers, or any other form
of conversation. If not expected to be a contribution, the mailing list
post or comments should indicate so per the Apache license.

No matter how the code gets in, when it hits the source code repository an
email is sent out to the mailing list in charge of that repository
detailing the change. This allows for further review, and is a backstop
ensuring that code does not go in without the relevant oversight being
performed. In some cases projects use an official review-then-commit
approach, especially when managing stable codebases.

In addition to original code licensed to the Apache Software Foundation,
Apache products may include third party code. Whether or not to distribute
or use that third party code is discussed on the legal-discuss@ mailing
list. The very general philosophy is to avoid licenses adding terms beyond
the ASF's AL 2.0 license, while also remaining pragmatic towards the needs
of the user. Prior decisions may be viewed on the [previously asked
questions](/legal/resolved.html) page.

Finally, Apache projects record their export classifications
[here](/licenses/exports/) and via a notice in a README file in the
distribution as per the [crypto process](/dev/crypto.html).

### Project naming

New projects arrive at the ASF via the Apache Incubator project. One of the
steps undergone during the [incubation
process](http://incubator.apache.org/incubation/Process_Description.html)
is a check of the project name for trademark issues.

### Outgoing code

All releases require a successful vote from the releasing project's PMC.

In addition to technical quality, releases are checked to confirm the
source contains source headers, that LICENSE and NOTICE files are there and
that they include any additional 3rd party requirements. The [Release Audit
Tool](https://cwiki.apache.org/confluence/display/incubator/RatProposal) (RAT) project is a tool
in use across Apache to automate the checking product release quality.

Lastly, releases are checksummed with MD5/SHA1 so that damaged downloads
can be identified; and securely signed with PGP to confirm it is the
officially released version.

### Further questions

Please contact the [legal-discuss@ mailing list](/foundation/mailinglists.html#foundation-legal)
if you have any questions or comments.
