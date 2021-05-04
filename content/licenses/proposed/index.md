Title: Proposed Licenses
license: https://www.apache.org/licenses/LICENSE-2.0

The Apache Software Foundation is considering a new set of licenses to
[distribute software and documentation](#distributions) , to accept regular
[contributions from individuals and corporations](#clas) , and to accept
larger [grants of existing software products](#grants). We are updating our
[current Apache licenses](../) to reflect changes in the community
regarding patents and contributing.

Discussion of these licenses took place on the "license" mailing list at
apache.org, which has since been closed, but [archives of the license
mailing
list](http://issues.apache.org/eyebrowse/SummarizeList?listName=license@apache.org&by=thread)
are available. Please note that the licenses have been updated on December
24, 2003, and January 20, 2004, to reflect the first two rounds of comments
by the public. The primary 2.0 license was approved by the ASF board on
January 21.

These licenses help us achieve our goal of providing reliable and
long-lived software products through collaborative open source software
development. In all cases, contributors retain full rights to use their
original contributions for any other purpose outside of Apache while
providing the ASF and its projects the right to distribute and build upon
their work within Apache.

# Licensing of Distributions  {#distributions}

For more than two years, we have worked on improvements to the Apache
License in order to solve several deficiencies with the old one. We had the
following goals in mind (not in order of preference):

1.  **Clear** <br></br>Lots of questions get asked about 'can I include
Tomcat/Jserv/xxx in my commercial product,' even though *careful* reading
of the current license answers that. It may be better to be verbose if that
cuts down on frequently asked questions. Likewise, many lawyers have
commented that the original license did not define the terminology
precisely. *Solved in 2.0 by defining most important terms and separating
the permissions into identifiable sections.* 

1.  **Reusable** <br></br>The Apache- and ASF project-specific stuff should
be separated out of the license proper so that both ASF and non-ASF
projects can use the license terms unaltered. Currently, each ASF project
has its own, altered, version of the main ASF 1.1 license template. *Solved
in 2.0 by moving project-specific stuff into the NOTICE file.* 

1.  **Trademarks** <br></br>Avoid listing a specific set of trade marks,
trade names, and service marks within the license, since that caused
problems with project-specific licenses and apparent GPL-compatibility.
Likewise, provide instruction on how and when Apache marks may or may not
be used, since that is our most common source of licensing question.
*Partly solved in 2.0 by excluding any permission to use trademarks within
the license itself and moving related information into the NOTICE file.* 

1.  **Compatible with other licenses** <br></br>Since the ASF aims to
create software that implements reference standards, it's in the interests
of the ASF and ASF software users to aim for "compatibility" with other
widely used software licenses, where "compatibility" means that our
software can be used and redistributed as part of a combined work. Special
preference should be given to other widely-used open source licenses, to
help avoid reinvention of the wheel. *Partly solved in 2.0 by modifying
trademark clause and moving attribution notices into the NOTICE file.* 

1.  **Patent protection.** <br></br>It would be nice to have some language
in the license that protected us and our users from patent-infringement
suits, at the very least from contributors if not in more general ways.
*Solved in 2.0.* 

1.  **Covers contributions** <br></br>How do we ensure that contributions
are made under our license and not under some other conditions? *Solved in
2.0.* 

1.  **Applicable to documentation** <br></br>Make the license clearly
applicable to both software and documentation. *Solved in 2.0.* 

1.  **Includable by reference** <br></br>We should be able to replace all
the copies of the license in our files with pointers to a license file
and/or a URL. And the license should state that this can be done, and
define the conditions. *Solved in 2.0.* 

1.  **Short!** <br></br>Complete license should be as short as possible,
and with as little opaque legalese as possible. Less than a page is
excellent; shorter still is even better. *This is the trade-off -- we lost
shortness in exchange for more clarity and extra patent and contribution
coverage. However, the 2.0 license is still considerably shorter than
comparative licenses, and the ability to license by reference makes the
actual citations within source files much shorter than before.* 

## Apache License, version 2.0  {#2.0}

[http://www.apache.org/licenses/LICENSE-2.0](../LICENSE-2.0.txt) 

A big thank you goes out to all those who commented on the proposals. The
Apache License, version 2.0, was approved for use by Apache projects as of
January 21, 2004, with all Apache projects required to move to the new
license by March 1, 2004.

## Apache JSR License, version 2.0 (proposed)  {#JSR}

[http://www.apache.org/licenses/proposed/JSR-LICENSE-2.0.txt](JSR-LICENSE-2.0.txt) 

The JSR license has not yet been approved for use by Apache projects. This
license is for use by Apache projects that produce the official Reference
Implementation of a Java Specification Request, or an Independent
Implementation claiming conformance to a JSR, as part of the [Java
Community Process](http://www.jcp.org/). The JSPA rules specifically
require that the RI and compliant Independent Implementations be licensed
under terms that restrict the ability to modify the reserved namespace
"javax.*" and license the patent grants of expert group contributors under
terms that allow for reciprocity. This JSR license is intended to satisfy
those requirements without limiting open source experimentation and
innovation.

## Apache TCK License, version 2.0 (proposed)  {#TCK}

[http://www.apache.org/licenses/proposed/TCK-LICENSE-2.0.txt](TCK-LICENSE-2.0.txt) 

The TCK license has not yet been approved for use by Apache projects. This
license is for use by Apache projects that produce the official Technology
Compatibility Kit of a Java Specification Request as part of the [Java
Community Process](http://www.jcp.org/). It would only be applied to code
specific to a given specification's TCK, with the rest of the code being
placed under the 2.0 license.

# Contributor License Agreements  {#clas}

Although the 2.0 license contains a built-in contribution agreement, we
also need updated contributor license agreements for those cases where a
signature is needed or a corporation needs a signed document.

Version 3 of the [Contributor License Agreement (CLA)](cla.txt) has mostly
the same terms as version 2, except that the patent license is more
specific and submission on behalf of a third-party are considered
separately. The purpose of this agreement is to clearly define the terms
under which intellectual property has been contributed to the ASF and
thereby allow us to defend the project should there be a legal dispute
regarding the software at some future time. A signed CLA (any version) is
required to be on file before an individual is given commit rights to an
ASF project.

Finally, we are considering placing a [community contribution
notice](community.txt) at various points of entry (mailing list
subscription, problem report entry, etc.) so that nobody can reasonably
claim they were ignorant of the terms for contributing.

# Software Grants  {#grants}

When an individual or corporation decides to donate a body of existing
software or documentation to one of the Apache projects, they need to
execute a formal [Software Grant](software-grant.txt) agreement with the
ASF. Typically this is done after negotiating approval with the ASF board
of directors, since the ASF will not accept software unless there is a
viable community available to support a collaborative project.

