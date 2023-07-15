Title: ASF Position Regarding Sender ID
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

On September 2, 2004, the Apache Software Foundation sent the following
open letter to the mailing list of the [MARID IETF Working
Group](http://www.ietf.org/html.charters/marid-charter.html).

----------

<pre>

Subject: DEPLOY: Apache projects unable to deploy Sender ID

This message summarizes the position of the Apache Software Foundation,
the Apache SpamAssassin Project Management Committee, and the Apache JAMES
Project Management Committee.

The Apache Software Foundation (ASF) delivers enterprise-grade, open
source software products that attract large communities of users.  The
pragmatic Apache License makes it easy for all users, commercial and
individual, to deploy Apache products including Apache SpamAssassin (an
extensible email filter which is used to identify spam) and Apache JAMES
(the Java Apache Mail Enterprise Server).

The current Microsoft Royalty-Free Sender ID Patent License Agreement
terms are a barrier to any ASF project which wants to implement Sender ID.
We believe the current license is generally incompatible with open source,
contrary to the practice of open Internet standards, and specifically
incompatible with the Apache License 2.0.  Therefore, we will not
implement or deploy Sender ID under the current license terms.

We raised these concerns with the IETF ASRG chairs on March 1st and we had
assurances from the ASRG chairs that these matters would be addressed, but
they haven't been.  We feel that dismissal of unspecified, pending, patent
claims recklessly shifts the risk and potential burden onto implementors.

We began working with Larry Rosen, general counsel of the Open Source
Initiative, on June 9th, to coordinate our efforts to resolve the patent
licensing issues.  And since July 20th, Larry Rosen has been negotiating
with Michele Herman at Microsoft, but most of the major barriers are still
present.

We are in agreement with Larry's analysis of the incompatibilities of the
current license:

    ------------------------------------------------------------------------

    From: "Lawrence Rosen" &lt;lrosen@rosenlaw.com&gt;
    Subject: RE: Microsoft's amended Sender ID license
    Date: Tue, 24 Aug 2004 10:15:12 -0700

    The open source development and distribution process works as well as
    it does because everyone treats open source licenses as
    sublicenseable, and most of them are expressly so. Open source
    licenses contemplate that anyone who receives the software under
    license may himself or herself become a contributor or
    distributor. Software freedom is inherited by downstream
    sublicensees. Meanwhile, the Microsoft Sender ID patent license
    continues the convenient fiction that there are "End Users" (S1.5) who
    receive limited rights. That is unacceptable in open source licenses.

    I have explained to Microsoft that their license is expressly
    incompatible with the warranty of provenance in the Academic Free
    License and the Open Software License:

       "Licensor warrants that the copyright in and to the Original Work
       and the patent rights granted herein by Licensor are owned by the
       Licensor or are sublicensed to You under the terms of this License
       with the permission of the contributor(s) of those copyrights and
       patent rights." (AFL/OSL S7)

    The "nontransferable, non-sublicenseable" language in their reciprocal
    patent license (S2.3) also imposes an impossible administrative burden
    on the open source development community and, in essence, creates
    additional downstream patent licenses that will be incompatible with
    the AFL/OSL and similar open source licenses, and with the open source
    development process.

    The requirement that Microsoft Sender ID patent licenses be formally
    executed (e.g., S6.10) is incompatible with the way the open source
    development and distribution process actually works. Furthermore, the
    requirement that "If you would like a license from Microsoft (e.g.,
    rebrand, redistribute), you need to contact Microsoft directly" (S2.2)
    gives Microsoft information about its competitors' plans that it has
    no reason to know. No open source license -- and *all* of them allow
    rebranding and redistribution -- can be conditioned on informing
    Microsoft of anything at all. Other proposed licenses have been
    rejected by OSI and FSF because they required licensees to notify the
    licensor of their intentions.

    The requirement that Microsoft's patent licensing notice be placed "in
    close proximity to" the license agreement (S4.3) is, as a practical
    matter, impossible for most open source licenses posted on the OSI or
    other websites. There is no reason for that requirement other than to
    burden open source licenses with Microsoft notices.

    One final point: Open source licenses must be worldwide. The Microsoft
    license, however, makes licensees subject to U.S. Export
    Administration Regulations (S6.2). Similar provisions have been
    rejected by OSI in many other licenses. Instead, Microsoft should
    simply make licensees responsible to obey the relevant export control
    laws and leave it at that. We all understand that an open source
    license doesn't override local laws.

    ------------------------------------------------------------------------

We believe there are additional problems with license and the process.
Some of these include:

  * Microsoft has not disclosed information about their pending patents
    that cover areas of -core and -pra.  It is generally accepted that the
    PRA algorithm is covered, but any patents covering -core could cover
    far more than PRA.

  * Where the Sender ID specification includes additional optional
    features or suggests variations and alternatives to techniques needed
    to implement the specification (or where such variations or
    alternatives are obvious to an implementor), no license is granted.
    Only patents necessary to implement the specification are clearly
    licensed;

  * The licenses are said to be "personal" (though a reciprocally granted
    license is not required to be), which prevent assignment to an
    acquiring party, so open source projects may not be able to transfer a
    license to new maintainers or organizations.

  * The scope of the patent license is limited to compliant
    implementations.  This is incompatible with the broad grant of open
    source licenses to create any derivative work whatsoever.  In
    addition, as Internet software is often non-compliant for many
    possible different reasons, this would restrict the use of Sender ID
    unacceptably.  In addition:

     - Measurement of compliance is a problem.
     - If compliance is needed to get a license, then it's a problem.  If
       compliance is not needed to get a license, then the clause should
       just be dropped.
     - Full compliance might be difficult to achieve for technical or
       resource reasons.
     - Obvious extensions (many already under discussion) could be
       subject to unknown additional patents.
     - Accepted best practices often exceed or conflict with compliance
       for Internet standards.

  * It's conceivable that someone might want (or defensively, need) to
    enforce a patent related to Sender ID, but not "necessarily infringed"
    by an implementation of the specification, against Microsoft, but
    doing so would allow Microsoft to terminate.  The agreement is
    lopsided and will probably give Microsoft a competitive advantage in
    the Sender ID marketplace that is not warranted given the open
    standards that form the basis for Sender ID.

  * We are also concerned by the rush to adopt this standard in spite of
    technical concerns, lack of experience in the field, and a lack of
    consensus in the IETF MARID WG.

We will not be implementing support for Sender ID until such time as the
issues with the license are fixed and acceptable to the Apache James and
Apache SpamAssassin Project Management Committees.  We believe the first
step is fixing Larry Rosen's concerns.  As an alternative resolution, we
would find it acceptable if the pending patents were granted to a
non-profit organization such as ISOC and licensed under sufficiently open
terms.

Finally, as developers of open source e-mail technologies, we are
concerned that no company should be permitted IP rights over core Internet
infrastructure.  We believe the IETF needs to revamp its IPR policies to
ensure that the core Internet infrastructure remain unencumbered.

Greg Stein
Chairman, Apache Software Foundation

Serge Knystautas
V.P., Apache JAMES

Daniel Quinlan
V.P., Apache SpamAssassin

</pre>
 
----------
*forthcoming...* 
