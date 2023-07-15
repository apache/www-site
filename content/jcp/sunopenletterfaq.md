Title: FAQ - Open Letter to Sun Microsystems - JCK
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

# FAQ Open Letter to Sun Microsystems
We have created the following FAQ to provide background information on the
[open letter to Sun microsystems.](sunopenletter.html) 

    Q : What is the Apache Software Foundation?
    A : The Apache Software Foundation - or ASF - is a 501(c)3 public
        charity that, among other things, provides a foundation for
        open, collaborative software development projects by supplying
        hardware, communication, and business infrastructure.  The
        Foundation website is http://www.apache.org and you can read
        more about the Foundation at
        http://www.apache.org/foundation/faq.html

    Q : What is the Apache Harmony project?
    A : Apache Harmony is a project of the Apache Software Foundation
        focused on creating an independent, compatible implementation
        of Java SE.  That means we're writing the whole implementation
        from scratch, or incorporating software from other open source
        projects.  You can read more about the Apache Harmony project
        at its website http://harmony.apache.org

    Q : Why was Harmony created?
    A : Harmony was created for many reasons.  The fundamental reason is the same as
        other projects in the open source / free software space working Java (such as
        GNU Classpath, Kaffe, GCJ, etc) - we wanted to do an implementation of a
        complete, compatible Java SE runtime environment,  including virtual machine,
        class library and tools under a FLOSS license.

    Q : What does "FLOSS" mean?
    A : It refers to a license being either "Free", "Libre" or "Open
        Source".

    Q : What is the Java Community Process?
    A : The Java Community Process (or JCP) is the governing
        organization for Java.  Initially created by Sun, it includes
        an Executive Committee composed of 32 representatives from
        corporations, individuals and academics representing thousands
        of members.  The JCP is the organization through which new
        specifications for Java technology are created.

    Q : How long has the JCP existed?
    A : After an initial draft of the process was crafted and
        distributed on October 8, 1998, the JCP was introduced on
        December 8, 1998 and was announced by Sun at the 1998 Java
        Business Expo Conference.

    Q : What is the JSPA?
    A : The JSPA is the "Java Specification Participation Agreement",
        the governing document of the JCP.  Among other things, it
        specifies how IP is managed in an expert group, how it is
        licensed to independent implementations, and how the TCK and
        RI can be licensed.

    Q : What is a JSR?
    A : A JSR is a "Java Specification Request", the formal vehicle
        through which Java technologies are created or updated.  A JSR
        is proposed by any JCP member, who is then known as the
        "specification lead" or "spec lead" for that JSR.  The spec
        lead organizes an "expert group" and that expert group works
        to create the specification.  The expert group must also
        create a "reference implementation" or "RI", as well as a
        "technology compatibility kit" or "TCK".

    Q : What is an expert group?
    A : An expert group is a group of people, organized by a spec lead
        for a JSR, with appropriate expertise in the area of the JSR.

    Q : How many JSRs has the ASF participated in?
    A : Many - the ASF has had representation in JSRs since the modern
        JCP was formed.

    Q : How many JSRs has the ASF implemented as open source software?
    A : Many. For example, Apache Tomcat, Apache Geronimo, Apache
        Harmony, Apache MyFaces, Apache Scout, Apache ActiveMQ, Apache
        ServiceMix, Apache Jackrabbit, Apache Portals, Apache
        WebServices and Apache XML are all projects that implement one
        or more JSRs.

    Q : What is a TCK?
    A : The Technology Compatibility Kit, a test framework produced by
        the spec lead to be used by independent implementations to
        demonstrate compatibility (and therefore get the grant of
        necessary IP).

    Q : Why is the TCK useful?
    A : It allows independent implementations to demonstrate that they
        are compatible with the specification, and as a result,
        receive all the "necessary IP" from expert group members.

    Q : What is "necessary IP" and why is this important that
        compatible implementations receive it?
    A : "Necessary IP" is the IP - usually patents - that cannot be
        technically avoided when implementing the specification.  This
        is important because it prevents anyone from joining an expert
        group and gaining the ability to demand royalties from
        implementors or users of the specification.  This is one of
        the main features of the JCP that makes the specs the JCP
        produces "open specifications".

    Q : You talk about the JCK in the letter.  Is the JCK a TCK?
    A : It is, actually.  The JCK is the name Sun gave the TCK for the
        Java SE specification.  While it has a different name, it's a
        TCK for the purposes of JCP process discussion.

    Q : Who owns the JCK?
    A : Sun owns the JCK, as they created it as part of their
        obligation as a spec lead.  The JSPA requires the spec lead
        for every JSR to deliver a TCK (which Sun calls the JCK for
        the Java SE spec) when a given spec is completed to allow
        independent implementations to demonstrate compatibility and
        receive the necessary IP grant.

    Q : Was it always possible to create and distribute
        implementations of JSRs under free and open source licenses?
    A : No, but the ASF was instrumental in making this possible.  In
        2002, the Apache Software Foundation, working with other
        members of the Java community, led the effort to change the
        JCP governance document - the "Java Specification
        Participation Agreement" or JSPA.  These changes finally made
        it possible to create independent implementations of Java
        specification under free and open source licenses.  Before
        these changes, it was impossible to do so.

    Q : What is the "Apache Compromise"?
    A : As part of the process that led to changes in the JSPA, Sun
        Microsystems made a public commitment to the Java community
        that Sun-led specifications would be implementable in free and
        open source software.  That commitment can be found here :
        http://jcp.org/aboutJava/communityprocess/announce/LetterofIntent.html

    Q : Is it true that Java SE 5 was the first of the Java SE JSRs to
        be released under the above-mentioned FOSS-friendly JCP terms?
    A : Yes.  Some Java specifications take years to complete, and one
        was in progress at the time of the JSPA changes.  So we had to
        wait until the next JSR for Java SE was complete, which was
        Java SE 5.

    Q : I see you refer to "necessary IP" in your open letter.  Is Sun
        the only owner of the necessary intellectual property that the
        Java SE JSR contains?
    A : No.  There probably is "necessary IP" from all members of the
        Java SE expert group.  The JSPA requires expert group members
        to license their necessary IP to the spec lead, who in turn is
        obligated to license all necessary IP to any compatible
        implementation that passes the TCK (or in this case, the JCK).

    Q : Who was the spec lead for the Java SE 5 JSR?
    A : Sun.  See http://jcp.org/en/jsr/detail?id=176

    Q : Is Apache the first to ask for a JCK license?
    A : No.  There are many JCK licensees.  It is our understanding
        that we are the first non-profit with no commercial ties to
        Sun to attempt to license the JCK.  We know about a JCK
        licensing discussion between Sun and some in the free software
        community, but we don't believe that led to a successful
        resolution.

    Q : Is Apache against Sun earning money out of licensing the JCK
        to commercial entities?
    A : Of course not.  The ASF is a public charity and as such,
        doesn't compete in the commercial marketplace.  We take a
        completely neutral position regarding legal commercial
        activity.

    Q : What is a "field of use" restriction?
    A : A "field of use" restriction is a restriction that limits how
        a user can use a given piece of software, either directly or
        indirectly.  To give a concrete example from the Sun / Apache
        dispute, if Apache accepted Sun's terms, then users of a
        standard, tested build of Apache Harmony for Linux on a
        standard general purpose x86-based computer (for example, a
        Dell desktop) would be prevented from freely using that
        software and that hardware in any application where the
        computer was placed in an enclosed cabinet, like an
        information kiosk at a shopping mall, or an X-ray machine at
        an airport.

    Q : Is a "field of use" restriction incompatible with both open
        source and free software principles?
    A : Yes, both.  See the Open Source Initiative's open source
        definition (http://www.opensource.org/docs/osd), most notably
        section 6 and 10 and the Free Software Foundation's free
        software definition
        (http://www.gnu.org/philosophy/free-sw.html) most notably
        freedom #0.

    Q : Would the ASF be satisfied with a TCK license that removed the
        field of use restriction if used only on Apache Licensed code?
    A : No.  Looking at the broader picture, the ASF has worked for
        years to ensure that the JCP creates "open specifications",
        specs that are freely implementable under free and open source
        licenses.  If the field of use restriction was lifted only for
        the Apache License (or only the GPL, or only the MPL, or...)
        then it still would be discriminatory and contrary to the
        terms of the JSPA.  The resulting specs still wouldn't be open
        specifications.  In addition to that, the Apache License 2.0
        grants everybody who follows the terms of the license "a
        perpetual, worldwide, non-exclusive, no-charge, royalty-free,
        irrevocable copyright license to reproduce, prepare Derivative
        Works of, publicly display, publicly perform, sublicense, and
        distribute the Work and such Derivative Works in Source or
        Object form."  In particular, note the word "sublicense" in
        that quote - it's not possible for an "Apace License
        carve-out" here as people can sublicense our software.  (Note
        that it's still true that if someone makes a derivative work
        of Apache Harmony, they are still obligated to secure their
        own JCK license and test their derivative if they wish to call
        their work compatible).

    Q : What is an acceptable JCK license for Apache?
    A : Simply put, we're asking Sun to make it like the other 15+ TCK
        licenses - including other major platform JSRs like Java EE -
        we have executed with them over the years, all of which have
        no "field of use" limitations.  We are asking that Sun drops
        the "field of use" limitation, therefore allowing freedom of
        use, in accordance with their obligations under the JSPA.

    Q : Why does Apache think it's entitled to such a license while
        others have to pay for it?
    A : This isn't a debate about the cost - Sun agrees that it should
        be available to Apache at no cost.  The important issue is
        lack of a field of use limitation.  The JSPA mandates is that
        everyone is entitled to a TCK license free of field of use
        limitations - whether or not they pay for the license - and
        that is what makes the specs created by the JCP open
        specifications.  Now, as to the issue of paying for the TCK,
        the JSPA requires that TCKs are made available to qualified
        not-for-profits, individuals and academics.  As Apache is a
        501(c)3 public charity - aka "non-profit" - we therefore would
        receive the JCK at no cost.

    Q : Does Apache think that Harmony could be used by commercial
        entities to avoid paying JCK licensing fees to Sun?
    A : No.  The only way that could happen is if a commercial entity
        stopped shipping their own software and started shipping the
        tested binaries that were created by the Harmony project.
        Even then, they would still need to license the Java branding
        rights from Sun, as Apache does not pass those rights
        downstream to users or redistributors of our software.  Note
        that if an entity made a derivative work, or used only part of
        Harmony's source code in building their implementation, they
        would still be obligated to obtain their own JCK license for,
        and test the software themselves.  Apache does not make its
        TCKs available for use outside of our projects.

    Q : Is Apache trying to damage Sun's business?
    A : No.  Apache is a non-profit and does not engage in any
        commercial activity.  We're trying to build our own
        independent implementation of Java, and create a community of
        users and developers around that software, and need the JCK to
        do so.

    Q : What about OpenJDK?  Sun has indicated their intention to
        release the source code of their implementation of Java SE
        under a modified version of the GPLv2.  Would OpenJDK be
        allowed to ship without passing the JCK?
    A : Good question, and a complicated one.  We think the answer is
        "no".  While Sun was the spec lead of the Java SE JSR and
        therefore had all the "necessary IP" licensed to them by all
        the expert group members, by simply placing their own
        implementation under the GPLv2, not all of the necessary IP is
        automatically granted.  If OpenJDK users are to receive the
        benefits of compatibility, the project will need to ship a
        binary that has passed the JCK.  It is worth noting that if
        Sun placed "field of use" limitations in the certified
        releases of OpenJDK, that would be in violation of its own
        license, the GPLv2.  If Sun added a "GPL-only carve-out" to
        the field of use, that would be problematic in the same way
        that an "Apache License-only carve-out" would be problematic,
        as we discussed above.

    Q : Why doesn't Apache simply ignore this and ships Harmony
        without passing the JCK?
    A : We can ship Harmony without passing the JCK - it's our source
        code to do with what we wish - and we will with milestone
        releases as we progress towards completion.  However, we could
        never claim to be Java compatible, which is something very
        important to Java users, and is the stated goal of the
        project.  Also, users wouldn't be assured that they had all
        necessary IP rights from the spec's contributors. Compatibility
        is important to us as is not putting users in IP jeopardy, as
        it has been for every JSR the ASF has ever implemented.  We have
        no interest in forking the technology.

    Q : Why is Apache resorting to this public "open letter"?
    A : Apache has tried since August of 2006 to get this license.
        There has been quite a bit of effort put into this to achieve
        a private resolution, including private appeals to officers of
        Sun, including Jonathan Schwartz, Sun's CEO.  We even brought
        the issue up to the JCP Executive Committee.  But to this point,
        Sun has continued to be unyielding.  We really did hope to resolve this
        peacefully and privately, and continue to hope that we can
        resolve this peacefully.  But we owe answers to our
        communities as to why we haven't been able to secure the JCK,
        and we feel that at this point, it is Sun's question to answer
        given their contractual obligations in the JSPA, and their
        past and current promises to the open and free software
        communities.

    Q : Would Apache send such an open letter if it wasn't Sun the
        spec lead of the Java 5 JSR?
    A : Absolutely, if we ever got to an equivalent stage with another
        spec lead.  JCP openness is a necessary requirement for a
        healthy and diverse java ecosystem and has nothing to do with
        the identity of the spec lead or their company affiliation.
