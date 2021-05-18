Title: Release Policy
license: https://www.apache.org/licenses/LICENSE-2.0

This page documents the ASF policy on software releases. Content of this document is aimed at ASF release managers and [PMC](glossary#PMC) members.
Information [for end-users](https://infra.apache.org/release-download-pages.html#best_practice) and [for
distribution mirror operators](/info/how-to-mirror) is also available.

Other documents summarize the [release process](/dev/release-publishing) 
and the [design goals of this policy](/dev/mirrors).

# Contents #

[TOC]

# Release Policy  {#policy}

## Definition of "release"  {#release-definition}

Generically, a release is anything that is published beyond the group
that owns it.  For an Apache project, that means any publication outside the
development community, defined as individuals actively participating in
development or following the dev list.

More narrowly, an official Apache release is one which has been endorsed as an
"act of the Foundation" by a PMC.

## Release approval  {#release-approval}

Each PMC MUST obey the ASF requirements on approving any release.

For a release vote to pass, a minimum of three positive votes and more
positive than negative votes MUST be cast.  Releases may not be vetoed.
Votes cast by PMC members are binding.

Before casting +1 binding votes, individuals are REQUIRED to download all
signed source code packages onto their own hardware, verify that they meet all
requirements of ASF policy on releases as described below, validate all
cryptographic signatures, compile as provided, and test the result on their
own platform.

Release votes SHOULD remain open for at least 72 hours.

## Publication  {#publication}

Projects SHALL publish official releases and SHALL NOT publish unreleased
materials outside the development community.

During the process of developing software and preparing a release, various
packages are made available to the development community for testing
purposes. **Projects MUST direct outsiders towards official releases rather
than raw source repositories, nightly builds, snapshots, release
candidates, or any other similar packages.** The only people who are
supposed to know about such developer resources are individuals actively
participating in development or following the dev list and thus aware of the
conditions placed on unreleased materials.

## Artifacts  {#artifacts}

### Source packages  {#source-packages}

Every ASF release MUST contain one or more source packages, which MUST be
sufficient for a user to build and test the release provided they have
access to the appropriate platform and tools. A source release SHOULD not
contain compiled code.

### Release signing  {#release-signing}

All supplied packages MUST be cryptographically signed by the Release
Manager with a detached signature.  Folks who vote +1
for release MAY offer their own cryptographic signature to be concatenated
with the detached signature file (at the Release Manager's discretion)
prior to release.

### Compiled packages  {#compiled-packages}

The Apache Software Foundation produces open source software. All releases
are in the form of the source materials needed to make changes to the
software being released.

As a convenience to users that might not have the appropriate tools to build a
compiled version of the source, binary/bytecode packages MAY be distributed
alongside official Apache releases.  In all such cases, the
binary/bytecode package MUST have the same version number as the source
release and MUST only add binary/bytecode files that are the result of
compiling that version of the source code release and its dependencies.

## Licensing  {#licensing}

Every ASF release MUST comply with ASF licensing policy. This
requirement is of utmost importance and an audit SHOULD be performed before
any full release is created.  In particular, every artifact distributed MUST
contain only appropriately licensed code per [Apache Licensing
Policy](/legal/resolved).

## Licensing Documentation  {#licensing-documentation}

Each package MUST provide a `LICENSE` file and a `NOTICE` file which account
for the package's exact content.  `LICENSE` and `NOTICE` MUST NOT provide
unnecessary information about materials which are not bundled in the package,
such as separately downloaded dependencies.

For source packages, `LICENSE` and `NOTICE` MUST be located at the root of the
distribution.  For additional packages, they MUST be located in the
distribution format's customary location for licensing materials, such as the
`META-INF` directory of Java "jar" files.

### The `LICENSE` file  {#license-file}

The `LICENSE` file MUST contain the full text of the [Apache License
2.0](/licenses/LICENSE-2.0.txt).

When a package bundles code under several licenses, the `LICENSE` file
MUST contain details of all these licenses. For each component which is not
Apache licensed, details of the component MUST be appended to the `LICENSE`
file.  The component license itself MUST either be appended or else stored
elsewhere in the package with a pointer to it from the `LICENSE` file, e.g.
if the license is long.

### The `NOTICE` file  {#notice-file}

The `NOTICE` file must conform to the requirements of [Apache licensing
policy](/legal/src-headers.html#notice).

See also [section 4(d)](licenses/LICENSE-2.0.html#redistribution) of the
Apache License 2.0.

### License Headers  {#license-headers}

Source files consisting of works submitted directly to the ASF by the
copyright owner or owner's agent must contain the appropriate [ASF license
header](/legal/src-headers.html#headers).

## Release Distribution  {#release-distribution}

Once a release is approved, all artifacts MUST be uploaded to the project's
subdirectory within the canonical Apache distribution channel,
`downloads.apache.org`.

The PMC is responsible for the project distribution directory and MUST be able
to account for its entire contents.  All release artifacts within the
directory MUST be signed by a committer, preferably a PMC member.

After uploading to the canonical distribution channel, the project (or anyone
else) MAY redistribute the artifacts in accordance with their licensing
through other channels.

### Release Archival  {#release-archival}

All official releases MUST be archived permanently on archive.apache.org.

(Uploading to the canonical distribution channel satisfies this requirement
because archival happens automatically as a side effect.)

## Release Policy Administration  {#administration}

Projects MUST notify the Board of Directors of any deviations from recommended
or required policy directives.
 
Changes to Release Policy must be approved by Legal Affairs.

## TODO

Formalize additional official policies and reference them from this policy:

*   _ASF Licensing Policy_ (curated by Legal Affairs, applies to both released
    and unreleased code)

# Release FAQ  {#releases}

### Why Do We Need a Foundation-Wide Policy?  {#why}

In the traditional open source development methodology practiced
at volunteer liability-limiting organizations like Apache, it is necessary to draw
clear distinctions between public resources that represent works "in-progress"
and works suitable for consumption by the public at large.
The purpose of a clear line is to inform our legal strategy of providing
protection for formal participants involved in producing releases, as defined
in the next section.  In-progress assets are viewed as controlled distributions
designed for self-identifying participants in project development, who are
primarily following the project's development lists.  Uncontrolled distributions,
aka releases, are what this policy document is designed to cover.

Were we to avoid drawing this distinction, and instead encouraged users to interact
directly with source control or nightly builds, it would be very difficult for
the organization to offer legal protection to Apache committers and PMC members
who have only exercised their own judgement in making software modifications
without the benefit of an **authorized business decision** approving of the distribution
of those artifacts as-is to the public at large.  The bulk of Apache's "bureaucracy"
and project governance structure are to facilitate the goals of this policy, so this
document is well worth a careful study.

Deviations from this policy may have an adverse effect on the legal shield's effectiveness,
or the insurance premiums Apache pays to protect officers and directors, so are strongly
discouraged without prior, explicit board approval.  Do note however that organizationally
we prefer robust, reviewable decision-making over efficient decision-making, so if you
are thinking of proposing an alternative process for the board to consider, be sure
your targets reflect this.

### What Is A Release?  {#what}

Releases are, by definition, anything that is published beyond the group
that owns it. In our case, that means any publication outside the group of
people on the product dev list. If the general public is being instructed
to download a package, then that package has been released. Each PMC must
obey the ASF requirements on [approving any release](#approving-a-release). 
How you label the package is a secondary issue, described below.

During the process of developing software and preparing a release, various
packages are made available to the developer community for testing
purposes. **Do not include any links on the project website that might
encourage non-developers to download and use nightly builds, snapshots,
release candidates, or any other similar package.** The only people who are
supposed to know about such packages are the people following the dev list
(or searching its archives) and thus aware of the conditions placed on the
package. If you find that the general public are downloading such test
packages, then remove them.

Under no circumstances are unapproved builds a substitute for releases. If
this policy seems inconvenient, then release more often. Proper release
management is a key aspect of Apache software development.

The Apache Software Foundation produces open source software. All releases
are in the form of the source materials needed to make changes to the
software being released. In some cases, binary/bytecode packages are also
produced as a convenience to users that might not have the appropriate
tools to build a compiled version of the source. In all such cases, the
binary/bytecode package must have the same version number as the source
release and may only add binary/bytecode files that are the result of
compiling that version of the source code release.

### How Do The Types Of Apache Software Distribution Differ?  {#release-types}

- **Test Packages** are not Apache releases. All releases require due
process and official approval. Test packages are for testing ongoing
development and should only be discussed on the project development lists.

- **Nightly Builds** are simply built from the Subversion/Git trunk/branch,
usually once a day. These packages are intended for regular testing of
the build process and to give automated testers a common build for
regression testing. They are not intended for use by the general
public.

- **Release Candidates** are packages that have been proposed for
approval as a release but have not yet been approved by the project.
These packages are intended for developers (and users who follow the
development discussions) to test and report back to the project
regarding their opinions on the package quality compared to prior
releases. Many release candidates are possible prior to a release
approval. Users that are not interested in development testing should
wait until a release is formally approved.

- **Releases** are packages that have been approved for general public
release, with varying degrees of caveat regarding their perceived quality
or potential for change. Releases that are intended for everyday usage by
non-developers are usually referred to as "stable" or "general availability
(GA)" releases. Releases that are believed to be usable by testers and
developers outside the project, but perhaps not yet stable in terms of
features or functionality, are usually referred to as "beta" or "unstable".
Releases that only represent a project milestone and are intended only for
bleeding-edge developers working outside the project are called "alpha".

## Release Management Questions  {#management}

### Where do releases go? ###

A release isn't 'released' until the contents are in the project's 
distribution directory, which is a subdirectory of `downloads.apache.org`.
In addition to the distribution directory, project that use Maven or
a related build tool sometimes place their
releases on `repository.apache.org` beside some convenience binaries. 
The distribution directory is required, 
while the repository system is an optional convenience.

### What Must Every ASF Release Contain?  {#what-must-every-release-contain}

Every ASF release **must** contain a source package, which must be
sufficient for a user to build and test the release provided they have
access to the appropriate platform and tools. The source package must be
[cryptographically signed](/dev/release-signing.html) by the Release
Manager with a detached signature; and that package together with its
signature must be tested prior to voting +1 for release. Folks who vote +1
for release may offer their own cryptographic signature to be concatenated
with the detached signature file (at the Release Manager's discretion)
prior to release.

Note that the PMC is responsible for all artifacts in their distribution
directory, which is a subdirectory of `downloads.apache.org` ; and all
artifacts placed in their directory must be signed by a committer,
preferably by a PMC member. It is also necessary for the PMC to ensure that
the source package is sufficient to build any binary artifacts associated
with the release.

Every ASF release **must** comply with ASF licensing policy. This
requirement is of utmost importance and an audit should be performed before
any full release is created. In particular, every artifact distributed must
contain only [appropriately](/legal/resolved#category-a)
[licensed](/legal/resolved#category-x) code. More information can be found
in the [foundation website](/) and in the [release
licensing FAQ](#license).

### What are the ASF requirements on approving a release?  {#approving-a-release}

Votes on whether a package is ready to be released use 
[majority approval](/foundation/glossary.html#MajorityApproval) -- 
i.e., at least three PMC members must vote affirmatively
for release, and there must be more positive than negative votes.
Releases may not be vetoed. Before voting +1 PMC members are required
to download the signed source code package, compile it as provided, and test the 
resulting executable on their own platform, along with also verifying that the 
package meets the requirements of the ASF policy on releases.

### How Should Releases Be Announced?  {#release-announcements}

Please ensure that you wait at least 24 hours after uploading a new release
before updating the project download page and sending the announcement email(s).
This is so that mirrors have sufficient time to catch up.  (For time-critical
security releases, the download pages script supports
[bypassing](release-download-pages#less-than-24hr) this requirement.)

It is important that people are informed about the availability of new
releases. Announcements must contain a link to the relevant download page for the source.
At the very least, emails should be sent out announcing this to
all appropriate mailing lists. Many top level projects have announcement
lists for this purpose. There is also an
[ASF-wide](/foundation/mailinglists.html#foundation-announce)
announcement list which is suitable.

Please note that you can not post the ASF-wide announcement list without
the usage of "apache.org" mail address. Also, please make sure that you
have put 3-5 lines blurb for the project. (because most of the subscribers
to announce.AT.apache.DOT.org list would not know what is XX-Project,
generally speaking)

It is recommended that an SHA-1 OpenPGP compatible signature is added to
the announcement mail. Please ensure that your public key has been already
uploaded to famous pgp sites (e.g. http://pgp.mit.edu/). This key should
either be the one used to sign the release or one that is cross-signed by
that key.

### Is There A Guide To Best Practice?  {#best-practice}

See the Incubator [release management
guide (draft)](http://incubator.apache.org/guides/releasemanagement.html#best-practice).
Alternatively, see the "How to release" developer documentation of any
established Apache project.  (The author is familiar with
[this one](http://subversion.apache.org/docs/community-guide/releasing#release-creating),
from his project.)

### Must releases be built on hardware owned and controlled by the committer?  {#owned-controlled-hardware}

Strictly speaking, releases must be **[verified](https://svn.apache.org/repos/private/committers/tools/releases/compare_dirs.pl)**
on hardware owned and controlled by the committer.  That means hardware the 
committer has  physical possession and control of and exclusively full
administrative/superuser access to.  That's because only such hardware is
qualified to hold a PGP private key, and the release should be verified on the
machine the private key lives on or on a machine as trusted as that.

Practically speaking, when a release consists of anything beyond an archive
(e.g., tarball or zip file) of a source control tag, the only practical way to
validate that archive is to build it locally; manually inspecting generated
files (especially binary files) is not feasible.  So, basically, "Yes".

*Note: This answer refers to the process used to produce a release artifact
from a source control tag.  It does not refer to testing that artifact for
technical quality.*

## Release Distribution and Mirroring Questions  {#mirroring}

### Where can we host test packages (nightly builds and release candidates)?  {#host-rc}

Test packages are for use by consenting developers and interested community
members only, so they should not be hosted or linked on pages intended for end
users.  They should not be mirrored; only blessed GA releases should be
mirrored.

Projects should use the 
[`/dev` tree of the `dist` repository](https://dist.apache.org/repos/dist/dev)
or the staging features of repository.apache.org
to host release candidates posted for developer testing/voting (prior to being,
potentially, formally blessed as a GA release).

Nightly Builds that are not release candidates, can be hosted at [ci.apache.org projects area](https://ci.apache.org/projects),
just file an INFRA ticket.

### Where can we host public (GA) releases?  {#host-GA}

Current releases must be served from the ASF mirroring system by placing them under
`https://downloads.apache.org/` (see [How do I upload a release?](#upload-ci)). 

Project download
pages must link to the mirrors and not to the main Apache Web site; see
[instructions for creating download pages](/dev/release-download-pages) for
further details. 
The website documentation for the software must contain a link to the download page for the source.

Project websites (`http://  {project}.apache.org`),
VMs (`http://  {project}.zones.apache.org` and `http://{project}-vm.apache.org`),
and source control repositories (`svn.apache.org` and Git repositories)
may not be used to distribute releases --- that is, releases should not be
downloaded from them.

### How are releases archived?  {#archived}

All releases must be archived on <http://archive.apache.org/dist/>.

An automated process adds releases to the archive about a day after
they first appear on to <https://downloads.apache.org/>.
Once a release
is placed under `https://downloads.apache.org/` it will automatically be copied over
to `http://archive.apache.org/dist/` and held there permanently, even after it is deleted
from `https://downloads.apache.org/`.

If you have (legacy?) releases that never got archived, 
ask infra to copy them to `http://archive.apache.org/dist/`.

### When Should An Old Release Be Archived?  {#when-to-archive}

`downloads.apache.org` should contain *the latest release in each branch 
that is currently under development*. When development ceases on a version 
branch, releases of that branch should be removed from the project's download 
directory.

(If the project uses svnpubsub, 
this is done by deleting the artifacts from 
`https://dist.apache.org/repos/dist/release/<TLP name>/`.)

For example, if Apache Foo 1.2.x is a newer release in the same line as 
Foo 1.1.a, then 1.1.a should be removed when 1.2.x is released.
Note that all releases are automatically archived,
see [How Is An Old Release Moved To The Archives](#how-to-archive)

If Apache Foo 1.2 is a new branch, and development continues on 1.1 in 
parallel, then it is acceptable to serve both 1.1.a and 1.2.x from `/dist`.

### How do I upload a release ?  {#upload-ci}

By committing your release tarballs to the appropriate subdirectory (i.e. TLP name) of the
[`https://dist.apache.org/repos/dist/release/`](https://dist.apache.org/repos/dist/release/)
repository.  Our synchronization process will push the files to [the master
mirror site](https://downloads.apache.org/) within 15 minutes.  The 24-hour wait for
mirrors is still required though (as [mirrors use an 1/N-daily
rsync](../info/how-to-mirror) to catch up with the `dist/` tree).

The repository directory
`https://dist.apache.org/repos/dist/release/<TLP name>/`
is for **official releases only**, i.e. archives (+ sigs, hashes) that have been approved
by the PMC. For this reason, **by default only PMC members can update the dist/release directory tree**.

If the Release Manager is not a member of the PMC, they will need to ask a PMC member to do the actual release publication.

The PMC can also vote to let non-PMC-members update the dist/release area.
To get this set up, please open a JIRA ticket at the [INFRA JIRA](https://issues.apache.org/jira/browse/INFRA) referencing the PMC vote.

### Where can I stage a release candidate?  {#stage}

There is also a development area under
`https://dist.apache.org/repos/dist/dev/<TLP name>/`
which can be used for development releases.
For example snapshots and release candidates can be stored here.  One important item to note, 
is that this directory does not get published to the mirrors via svnpubsub.  It is intended to 
act as a staging location in preparation for the release to become official.

All committers on a project can write to the dist/dev area for the project.

If used for release candidates, then following a successful vote, the
appropriate files can be moved from the dev/ tree to the release/ tree
in order to publish them.

Commit mails to the `dist/` repository go to your normal project mailing lists.

### Do I need to talk to Infrastructure before distributing a release?  {#heads-up}

Most projects can just distribute a release as described in the previous two
questions.  However, releases that are likely to strain the mirroring and
download resources **must** be coordinated with infrastructure.

Releases of more than 1GB of artifacts require a heads-up to Infrastructure in
advance.

Specific exemptions from other dist policies (such as what may or must or must
not be distributed via the mirrors) also need to be coordinated with Infrastructure.

### Which Directory For What Build?  {#build-directories}

| Type             | Location                 |
|------------------|--------------------------|
| Nightly Builds   | ci.apache.org/projects |
| Current Releases | downloads.apache.org     |
| Older Releases   | archive.apache.org/dist  | 

### How Is An Old Release Moved To The Archives?  {#how-to-archive}

`downloads.apache.org` is automatically archived. Therefore, a copy of an
official release will already exist in the archives. To move a release to
the archives, just delete the copy in your project's dist directory. Remember to
update any links from the download page.

### How do I release Maven Artifacts?  {#maven-artifacts}

See the [Publishing Maven
Releases](/dev/publishing-maven-artifacts.html) guide.

## Release Licensing Questions  {#license}

Please read [Applying the Apache License, Version
2.0](apply-license) and check the [Apache Licenses](/licenses/) and 
[Apache Legal](/legal/) pages for current information.

### Which Files Must Contain An ASF License Text?  {#which-files-contain-license}

Every source file must contain the appropriate ASF License text.

### Is A Full Copy Of The License Required In Each Source File?  {#full-copy-for-each-source-file}

In short, only one copy of the license is needed per distribution. This
full license file should be placed at the root of the distribution in a
file named LICENSE. For software developed at the ASF, each source file
need only contain the [boilerplate
notice](/legal/src-headers.html#headers).

### Where Is The Right Place For Attribution Notices?  {#attribution-notices}

The new license allows for a NOTICE file that contains such attribution
notices (including the Apache attribution notice). Read
[this](/legal/src-headers.html#notice).

Any attribution notices contained within existing source files should be
moved into the file. The NOTICE file must included within the distributed
next to the LICENSE file.

Ensure that the standard ASF attribution notice is contained in any new
NOTICE file created.

### What Content Is Appropriate For The NOTICE File?  {#notice-content}

Read [this](/legal/src-headers.html#notice).

Only mandatory information required by the product's software licenses. Not
suitable for normal documentation.

### Is A NOTICE File Required For Pure ASF Code?  {#notice-required}

Yes! The NOTICE file must contain the standard ASF attribution, given
below:

    This product includes software developed at
    The Apache Software Foundation (http://www.apache.org/).

N.B. Unfortunately versions of this document prior to 2013-01-30 (r1440650) were incorrect, as they used the phrase:
"developed by" instead of "developed at". 
The official wording was established in section 6C of the 
[board minutes for May 24 2006](/foundation/records/minutes/2006/board_minutes_2006_05_24.txt)

<!-- Note: the text was originally added in: r201713 see #INFRA-367 -->

### If An Artifact Contains Code Under Several Licenses, Should It Contain Several License Files?  {#distributing-code-under-several-licenses}

When an artifact contains code under several licenses, the LICENSE file
should contain details of all these licenses. For each component which is
not Apache licensed, details of the component should be appended to the LICENSE file.
The component license itself may also be appended, or it may be stored elsewhere in the
artifact with a pointer to it from the LICENSE file, e.g. if the license is long.

[Here](https://svn.apache.org/repos/asf/httpd/httpd/trunk/LICENSE) is an
example showing appended licenses.

### What Are The Requirements To Distribute Other Artifacts In Addition To The Source Package?  {#distribute-other-artifacts}

ASF releases typically contain additional material together with the source
package. This material may include documentation concerning the release but
must contain LICENSE and NOTICE files. As mentioned above, these artifacts
must be signed by a committer with a detached signature if they are to be
placed in the project's distribution directory.

Again, these artifacts may be distributed only if they contain LICENSE and
NOTICE files. For example, the Java artifact format is based on a
compressed directory structure and those projects wishing to distribute
jars must place LICENSE and NOTICE files in the META-INF directory within
the jar.

Nothing in this section is meant to supersede the requirements defined
[here](#what) and [here](#what-must-every-release-contain) that all
releases be primarily based on a signed source package.

## Questions About Release Statistics  {#stats}

### Is There Any Way To Measure How Many Times XYZ Has Been Downloaded?  {#downloads}

Not directly. Files are downloaded from the mirrors. Apache does not
require mirrors to collect statistics about downloads.

Counting the hits on the [download script](/dev/release-download-pages.html#download-scripts)
should give a reasonable estimate. Various similar statistics are collected
by [Vadim Gritsenko](http://home.apache.org/~vgritsenko/).

There's also some logging done by closer.cgi which is stored in:

https://www-eu.apache.org/dyn/stats/
and
https://www-us.apache.org/dyn/stats/

The columns show:
- timestamp
- part of IP address
- country (estimated)
- URL

Note that the log just records accesses to the CGI script.
Such access may not result in a download, and the download may not be completed.
