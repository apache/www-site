Title: Release Policy
Tags: policy

license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

This page documents the ASF policy on software releases. This document is for ASF release managers and [PMC](glossary#PMC) members.
Information [for end-users](https://infra.apache.org/release-download-pages.html#best_practice) is also available.

This document summarizes the <a href="https://infra.apache.org/release-publishing.html">release process</a>.

## Contents

[TOC]

## Release Policy  {#policy}

### Definition of "release"  {#release-definition}

Generically, a release is anything that is published beyond the group
that owns it.  For an Apache project, that means any publication outside the
development community, defined as individuals actively participating in
development or following the dev list.

More narrowly, an official Apache release is one which has been endorsed as an
"act of the Foundation" by a PMC.

### Release approval  {#release-approval}

Each PMC MUST obey the ASF requirements on approving any release.

See the [ASF voting process](../foundation/voting.html) page for general
information about voting.

For a release vote to pass, a minimum of three positive binding votes and more
positive binding votes than negative binding votes MUST be cast.  Releases may
not be vetoed.  Votes cast by PMC members are binding, however, non-binding votes
are greatly encouraged and a sign of a healthy project.  See 
[expressing votes](../foundation/voting.html#expressing-votes-1-0-1-and-fractions) 
for details on what constitutes positive and negative votes.

Before casting +1 binding votes, individuals are REQUIRED to download all
signed source code packages onto their own hardware, verify that they meet all
requirements of ASF policy on releases as described below, validate all
cryptographic signatures, compile as provided, and test the result on their
own platform.

Release votes SHOULD remain open for at least 72 hours.

### Publication  {#publication}

Projects SHALL publish official releases and SHALL NOT publish unreleased
materials outside the development community.

During the process of developing software and preparing a release, various
packages are made available to the development community for testing
purposes. **Projects MUST direct outsiders towards official releases rather
than raw source repositories, nightly builds, snapshots, release
candidates, or any other similar packages.**
Projects SHOULD make available developer resources to support individuals actively
participating in development or following the dev list and thus aware of the
conditions placed on unreleased materials.

### Artifacts  {#artifacts}

#### Source packages  {#source-packages}

Every ASF release MUST contain one or more source packages, which MUST be
sufficient for a user to build and test the release provided they have
access to the appropriate platform and tools. A source release SHOULD not
contain compiled code.

#### Release signing  {#release-signing}

All supplied packages MUST be cryptographically signed by the Release
Manager with a detached signature.  Folks who vote +1
for release MAY offer their own cryptographic signature to be concatenated
with the detached signature file (at the Release Manager's discretion)
prior to release.

#### Compiled packages  {#compiled-packages}

The Apache Software Foundation produces open source software. All releases
are in the form of the source materials needed to make changes to the
software being released.

As a convenience to users that might not have the appropriate tools to build a
compiled version of the source, binary/bytecode packages MAY be distributed
alongside official Apache releases.  In all such cases, the
binary/bytecode package MUST have the same version number as the source
release and MUST only add binary/bytecode files that are the result of
compiling that version of the source code release and its dependencies.

### Licensing  {#licensing}

Every ASF release MUST comply with ASF licensing policy. This
requirement is of utmost importance and an audit SHOULD be performed before
any full release is created.  In particular, every artifact distributed MUST
contain only appropriately licensed code per [Apache Licensing
Policy](/legal/resolved).

### Licensing Documentation  {#licensing-documentation}

Each package MUST provide a `LICENSE` file and a `NOTICE` file which account
for the package's exact content.  `LICENSE` and `NOTICE` MUST NOT provide
unnecessary information about materials which are not bundled in the package,
such as separately downloaded dependencies.

For source packages, `LICENSE` and `NOTICE` MUST be located at the root of the
distribution.  For additional packages, they MUST be located in the
distribution format's customary location for licensing materials, such as the
`META-INF` directory of Java "jar" files.

#### The `LICENSE` file  {#license-file}

The `LICENSE` file MUST contain the full text of the [Apache License
2.0](/licenses/LICENSE-2.0.txt).

When a package bundles code under several licenses, the `LICENSE` file
MUST contain details of all these licenses. For each component which is not
Apache licensed, details of the component MUST be appended to the `LICENSE`
file.  The component license itself MUST either be appended or else stored
elsewhere in the package with a pointer to it from the `LICENSE` file, e.g.
if the license is long.

#### The `NOTICE` file  {#notice-file}

The `NOTICE` file must conform to the requirements of [Apache licensing
policy](/legal/src-headers.html#notice).

See also [section 4(d)](licenses/LICENSE-2.0.html#redistribution) of the
Apache License 2.0.

#### License Headers  {#license-headers}

Source files consisting of works submitted directly to the ASF by the
copyright owner or owner's agent must contain the appropriate [ASF license
header](/legal/src-headers.html#headers).

### Release Distribution  {#release-distribution}

Once a release is approved, all artifacts MUST be uploaded to the project's
subdirectory within the canonical Apache distribution channel,
`downloads.apache.org`.

The PMC is responsible for the project distribution directory and MUST be able
to account for its entire contents.  All release artifacts within the
directory MUST be signed by a committer, preferably a PMC member.

After uploading to the canonical distribution channel, the project (or anyone
else) MAY redistribute the artifacts in accordance with their licensing
through other channels.

#### Release Archival  {#release-archival}

All official releases MUST be archived permanently on archive.apache.org.

(Uploading to the canonical distribution channel satisfies this requirement
because archival happens automatically as a side effect.)

### Release Policy Administration  {#administration}

Projects MUST notify the Board of Directors of any deviations from recommended
or required policy directives.
 
Changes to Release Policy must be approved by Legal Affairs.

### TODO

Formalize additional official policies and reference them from this policy:

*   _ASF Licensing Policy_ (curated by Legal Affairs, applies to both released
    and unreleased code)

### Release FAQs

#### Why do we need a Foundation-wide policy?  {#why}

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

#### What is a release?  {#what}

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

#### How do the types Of Apache software distribution differ?  {#release-types}

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

### Release Management Questions  {#management}

#### Where do releases go? ###

A release isn't 'released' until the contents are in the project's 
distribution directory, which is a subdirectory of `downloads.apache.org`.
In addition to the distribution directory, project that use Maven or
a related build tool sometimes place their
releases on `repository.apache.org` beside some convenience binaries. 
The distribution directory is required, 
while the repository system is an optional convenience.

#### What Must Every ASF Release Contain?  {#what-must-every-release-contain}

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

#### What are the ASF requirements on approving a release?  {#approving-a-release}

Release votes happen as described above in the
[release approval](#release-approval) section.

Before voting +1 PMC members are required
to download the signed source code package, compile it as provided, and test the 
resulting executable on their own platform, along with also verifying that the 
package meets the requirements of the ASF policy on releases.

#### How should releases be announced?  {#release-announcements}

Please ensure that you wait at least one hour after uploading a new release
before updating the project download page and sending the announcement email(s). 

It is important to inform people about the availability of new
releases. Announcements must contain a link to the relevant download page for the source.
At the very least, emails should be sent out announcing this to
all appropriate mailing lists. Many top level projects have announcement
lists for this purpose. There is also an
[ASF-wide](/foundation/mailinglists.html#foundation-announce)
announcement list which is suitable.

Please note that you can not post the ASF-wide announcement list without
using an "apache.org" mail address. Also, please make sure that you
have put a 3-5 lines blurb for the project (because most of the subscribers
to announce.AT.apache.DOT.org list may not know what XX-Project is).

It is recommended that an SHA-1 OpenPGP compatible signature is added to
the announcement mail. Please ensure that your public key has been already
uploaded to famous pgp sites (e.g. http://pgp.mit.edu/). This key should
either be the one used to sign the release or one that is cross-signed by
that key.

#### Is there a guide to best practices?  {#best-practice}

See the Incubator [release management
guide (draft)](http://incubator.apache.org/guides/releasemanagement.html#best-practice).
Alternatively, see the "How to release" developer documentation of any
established Apache project.  (The author is familiar with
[this one](http://subversion.apache.org/docs/community-guide/releasing#release-creating),
from this project.)

#### Must releases be built on hardware owned and controlled by the committer?  {#owned-controlled-hardware}

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

### Release Distribution Questions  {#mirroring}

#### Where can we host test packages (nightly builds and release candidates)?  {#host-rc}

Test packages are for use by consenting developers and interested community
members only, so they should not be hosted or linked on pages intended for end
users, or released using a `closer.lua` script.

Projects should use the 
[`/dev` tree of the `dist` repository](https://dist.apache.org/repos/dist/dev)
or the staging features of repository.apache.org
to host release candidates posted for developer testing/voting (prior to being,
potentially, formally blessed as a GA release).

Nightly Builds that are not release candidates can be hosted at [ci.apache.org projects area](https://ci.apache.org/projects),
just file an INFRA ticket.

#### Where can we host public (GA) releases?  {#host-GA}

Current releases must be served from the ASF content distribution system by placing them under
`https://downloads.apache.org/` (see [How do I upload a release?](#upload-ci)). 

Project download pages must use a `closer.lua` script and not link directly to the main Apache Web site; see <a href="https://infra.apache.org/release-download-pages.html" target="_blank">instructions for creating download pages</a> for further details. 
The website documentation for the software must contain a link to the download page for the source.

Project websites (`http://  {project}.apache.org`),
VMs (`http://  {project}.zones.apache.org` and `http://{project}-vm.apache.org`),
and source control repositories (`svn.apache.org` and Git repositories)
may not be used to distribute releases --- that is, releases should not be
downloaded from them.

#### How are releases archived?  {#archived}

All releases are archived on <http://archive.apache.org/dist/>.

An automated process adds releases to the archive about a day after
they first appear on to <https://downloads.apache.org/>.
Once a release is placed under `https://downloads.apache.org/` it will automatically be copied over
to `http://archive.apache.org/dist/` and held there permanently, even after it is deleted from `https://downloads.apache.org/`.

If you have (legacy?) releases that never got archived, ask infra to copy them to `http://archive.apache.org/dist/`.

#### When should an old release be archived?  {#when-to-archive}

`downloads.apache.org` should contain *the latest release in each branch 
that is currently under development*. When development ceases on a version 
branch, releases of that branch should be removed from the project's download 
directory.

(If the project uses svnpubsub, delete the artifacts from 
`https://dist.apache.org/repos/dist/release/<TLP name>/`.)

For example, if Apache Foo 1.2.x is a newer release in the same line as 
Foo 1.1.a, then 1.1.a should be removed when 1.2.x is released.
Note that all releases are automatically archived,
see [How Is An Old Release Moved To The Archives](#how-to-archive)

If Apache Foo 1.2 is a new branch, and development continues on 1.1 in 
parallel, then it is acceptable to serve both 1.1.a and 1.2.x from `/dist`.

#### How do I upload a release ?  {#upload-ci}

By committing your release tarballs to the appropriate subdirectory (i.e. TLP name) of the
[`https://dist.apache.org/repos/dist/release/`](https://dist.apache.org/repos/dist/release/)
repository.  Our synchronization process will push the files to [the master
download site](https://downloads.apache.org/) within 15 minutes. 

Wait about an hour after uploading a new release before updating the project download page.

The repository directory
`https://dist.apache.org/repos/dist/release/<TLP name>/`
is for **official releases only**, i.e. archives (+ sigs, hashes) that have been approved
by the PMC. For this reason, **by default only PMC members can update the dist/release directory tree**.

If the Release Manager is not a member of the PMC, they will need to ask a PMC member to do the actual release publication.

The PMC can also vote to let non-PMC-members update the dist/release area.
To get this set up, please open a JIRA ticket at the [INFRA JIRA](https://issues.apache.org/jira/browse/INFRA) referencing the PMC vote.

#### Where can I stage a release candidate?  {#stage}

There is also a development area under
`https://dist.apache.org/repos/dist/dev/<TLP name>/`
which can be used for development releases.
For example snapshots and release candidates can be stored here.  One important item to note 
is that this directory does not get published to the content distribution system via svnpubsub.  It is intended to 
act as a staging location in preparation for the release to become official.

All committers on a project can write to the dist/dev area for the project.

If used for release candidates, then following a successful vote, the
appropriate files can be moved from the dev/ tree to the release/ tree
in order to publish them.

Commit mails to the `dist/` repository go to your normal project mailing lists.

#### Do I need to talk to Infrastructure before distributing a release?  {#heads-up}

Most projects can just distribute a release as described in the previous two
questions.  However, releases that are likely to strain content distribution resources **must** be coordinated with infrastructure.

Releases of more than 1GB of artifacts require a heads-up to Infrastructure in advance.

Specific exemptions from other dist policies (such as what may or must or must
not be distributed via the content distribution system) also need to be coordinated with Infrastructure.

#### Which Directory for what build?  {#build-directories}

| Type             | Location                 |
|------------------|--------------------------|
| Nightly Builds   | ci.apache.org/projects |
| Current Releases | downloads.apache.org     |
| Older Releases   | archive.apache.org/dist  | 

#### How is an old release moved to the archives?  {#how-to-archive}

`downloads.apache.org` is automatically archived. Therefore, a copy of an
official release will already exist in the archives. To move a release to
the archives, just delete the copy in your project's dist directory. Remember to
update any links from the download page.

#### How do I release Maven artifacts?  {#maven-artifacts}

See the guide to <a href="https://infra.apache.org/publishing-maven-artifacts.html" target="_blank">Publishing Maven
Releases</a>.

### Release licensing questions  {#license}

Please read [Applying the Apache License, Version
2.0](https://infra.apache.org/apply-license.html) and check the [Apache Licenses](/licenses/) and 
[Apache Legal](/legal/) pages for current information.

#### Which files must contain an ASF license text?  {#which-files-contain-license}

Every source file must contain the appropriate ASF License text.

#### Is a full copy of the license required in each source file?  {#full-copy-for-each-source-file}

In short, only one copy of the license is needed per distribution. This
full license file should be placed at the root of the distribution in a
file named LICENSE. For software developed at the ASF, each source file
need only contain the [boilerplate
notice](/legal/src-headers.html#headers).

#### Where is the right place for attribution notices?  {#attribution-notices}

The new license allows for a NOTICE file that contains such attribution
notices (including the Apache attribution notice). Read
[this](/legal/src-headers.html#notice).

Any attribution notices contained within existing source files should be
moved into the file. The NOTICE file must included within the distributed
next to the LICENSE file.

Ensure that the standard ASF attribution notice is contained in any new
NOTICE file created.

#### What content is appropriate for the NOTICE file?  {#notice-content}

Read [this](/legal/src-headers.html#notice).

Only mandatory information required by the product's software licenses. Not
suitable for normal documentation.

#### Is a NOTICE file required for pure ASF code?  {#notice-required}

Yes! The NOTICE file must contain the standard ASF attribution, given
below:

    This product includes software developed at
    The Apache Software Foundation (http://www.apache.org/).

N.B. Unfortunately versions of this document prior to 2013-01-30 (r1440650) were incorrect, as they used the phrase:
"developed by" instead of "developed at". 
The official wording was established in section 6C of the 
[board minutes for May 24 2006](/foundation/records/minutes/2006/board_minutes_2006_05_24.txt)

<!-- Note: the text was originally added in: r201713 see #INFRA-367 -->

#### If an artifact contains code under several licenses, should it contain several license files?  {#distributing-code-under-several-licenses}

When an artifact contains code under several licenses, the LICENSE file
should contain details of all these licenses. For each component which is
not Apache licensed, details of the component should be appended to the LICENSE file.
The component license itself may also be appended, or it may be stored elsewhere in the
artifact with a pointer to it from the LICENSE file, e.g. if the license is long.

[Here](https://svn.apache.org/repos/asf/httpd/httpd/trunk/LICENSE) is an
example showing appended licenses.

#### What are the requirements to distribute other artifacts in addition to the source package?  {#distribute-other-artifacts}

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

### Questions About Release Statistics  {#stats}

#### Is there any way to measure how many times XYZ has been downloaded?  {#downloads}

Visit <a href="https://logging1-he-de.apache.org/stats/" target="_blank">the download stats page</a>.
