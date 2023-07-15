Title: ASF 3rd Party License Policy
Atom: http://mail-archives.apache.org/mod_mbox/www-legal-discuss/?format=atom "ASF legal-discuss Mailing List"
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

[TOC]

## Purpose  {#audience}
This policy provides licensing guidance to Apache Software Foundation projects. It identifies the acceptable 
licenses for inclusion of third-party Open Source components in Apache Software Foundation products. 

Projects can submit licensing questions to the Legal Affairs Committee 
[JIRA space](https://issues.apache.org/jira/browse/LEGAL).


### License Criteria  {#criteria}
The following criteria serve as guidelines for the categories on this page.

1. The license must meet the [Open Source Definition](https://opensource.org/osd-annotated).<sup>a</sup>
2. The license, as applied in practice, must not impose significant restrictions beyond those imposed by the Apache License 2.0.

<sub>*a. (reviewed: 2019-02-16)*</sub>

### High Level  {#highlevel}
At a high level this policy separates licenses into three categories.

- **Category A**: Licenses in Category A may be included in Apache Software Foundation products. They are said to be "Apache-like".
- **Category B**: Licenses in Category B may be, under certain conditions, included in Apache Software Foundation products. They 'may Be' included. 
- **Category X**: Licenses in Category X may **NOT** be included in Apache Software Foundation products. 

## Category A: What can we include in an ASF Project?  {#category-a}

For inclusion in an Apache Software Foundation product, we consider the following licenses to be similar in terms to the Apache License 2.0:

- [Apache License 2.0](/licenses/LICENSE-2.0)
- [Apache Software License 1.1](/licenses/LICENSE-1.1). 
  Including variants:
    - [PHP License 3.01](http://www.php.net/license/3_01.txt)
    - [MX4J License](http://mx4j.sourceforge.net/docs/ch01s06.html)
- BSD (without advertising clause). Including variants:
    - [BSD 2-clause](http://opensource.org/licenses/bsd-license.php)
    - [BSD 3-clause](http://opensource.org/licenses/BSD-3-Clause)
    - [DOM4J License](http://dom4j.sourceforge.net/dom4j-1.6.1/license.html)
    - [PostgreSQL License](http://opensource.org/licenses/postgresql) 
    - [Eclipse Distribution License 1.0](http://www.eclipse.org/org/documents/edl-v10.php)
    - [Lawrence Berkeley National Labs BSD](https://spdx.org/licenses/BSD-3-Clause-LBNL.html)
- [MIT/X11](http://opensource.org/licenses/mit-license.php)
    - [ISC](https://opensource.org/licenses/ISC)
    - [Standard ML of New Jersey](https://www.smlnj.org/license.html)
    - [Cup Parser Generator](http://www2.cs.tum.edu/projects/cup/licence.php)
- [ICU](http://source.icu-project.org/repos/icu/icu/trunk/LICENSE)
- [University of Illinois/NCSA](http://opensource.org/licenses/UoI-NCSA.php)
- [W3C Software License](http://opensource.org/licenses/W3C.php)
- [W3C Community Contributor License Agreement](https://www.w3.org/community/about/agreements/cla/) - if at least 45 days after publication</li>
- [X.Net](http://opensource.org/licenses/xnet.php)
- [zlib/libpng](http://opensource.org/licenses/zlib-license.php)
- FSF autoconf license
- [DejaVu Fonts (Bitstream Vera/Arev licenses)](http://dejavu-fonts.org/wiki/index.php?title=License)
- [Academic Free License 3.0](http://opensource.org/licenses/afl-3.0.php)
- [Service+Component+Architecture+Specifications](http://web.archive.org/web/20080704184203/http://www.osoa.org/xmlns/sca/1.0/license.txt)
- OOXML XSD ECMA License
- [Microsoft Public License (MsPL)](http://www.opensource.org/licenses/ms-pl.html)
- [Creative Commons Copyright-Only Dedication](http://creativecommons.org/licenses/publicdomain/)
- [Python Software Foundation License](http://www.opensource.org/licenses/PythonSoftFoundation.php)
- [Python Imaging Library Software License](https://github.com/python-pillow/Pillow/blob/master/LICENSE)
- [Adobe Postcript(R) AFM files](https://spdx.org/licenses/APAFML.html)
- [Boost Software License Version 1.0](http://www.opensource.org/licenses/BSL-1.0)
- [License for CERN packages in COLT](https://dst.lbl.gov/ACSSoftware/colt/license.html) but note that this applies **only** to CERN packages in COLT and **not** others
- [UK Open Government Licence](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). This license allows the licensor to provide a custom attribution notice. If one is provided, include in the NOTICE. If one is not provided, include 'Contains public sector information licensed under the Open Government Licence v3.0.' in the NOTICE. 
- [WTF Public License](http://www.wtfpl.net/)
- [The Romantic WTF public license](https://github.com/pygy/gosub/blob/master/LICENSE)
- [UNICODE, INC. LICENSE AGREEMENT - DATA FILES AND SOFTWARE](http://www.unicode.org/copyright.html#Exhibit1)
- [Zope Public License 2.0](https://opensource.org/licenses/ZPL-2.0)
- [ACE license](http://www.cs.wustl.edu/~schmidt/ACE-copying.html)
- [Oracle Universal Permissive License (UPL) Version 1.0](https://oss.oracle.com/licenses/upl/)
- [Open Grid Forum License](https://www.ogf.org/ogf/doku.php/about/copyright)
- [Google "Additional IP Rights Grant (Patents)" file](https://chromium.googlesource.com/external/webrtc/+/master/PATENTS)
- [The Unlicense](https://unlicense.org/)
- [Historical Permission Notice and Disclaimer](https://opensource.org/licenses/HPND)
- [Mulan Permissive Software License，Version 2](https://license.coscl.org.cn/MulanPSL2/)
- [Blue Oak Model License 1.0.0](https://blueoakcouncil.org/license/1.0.0)

Many of these licenses have specific attribution terms that the project needs to adhered to, often by [adding 
them to the NOTICE file](/dev/licensing-howto.html). Ensure you are doing this when including these works. 

### Handling Public Domain 'licensed' works

You can include works in the public domain (or covered by a license treated similarly) within Apache products. You must provide attribution (in a similar fashion to the Category A list). 

A work should be treated as being in the public domain when one of the following applies: 

  - the work is covered by 
       - the Creative Commons [Public Domain Mark](http://creativecommons.org/publicdomain/mark/1.0/)
       - a suitable dedication (to the public domain) by the authors
  - clear evidence exists that US copyright for the work 
      - has expired
      - cannot be claimed. 

Licenses that we treat as similar to public domain:

  - Creative Commons [CC0 “No Rights Reserved”](http://creativecommons.org/about/cc0)
  - Creative Commons [Public Domain Certification](http://creativecommons.org/licenses/publicdomain/)

**Note that** whether a work falls in the public domain may be a 
[difficult](http://fairuse.stanford.edu/Copyright_and_Fair_Use_Overview/chapter8/) subject. 
Determining whether the copyright in a work has expired may be non-trivial and may vary between jurisdictions. Raise the topic on legal-discuss@ or via a JIRA issue if you have doubt over whether a work falls in the public domain. 


## Category B: What can we *maybe* include in an ASF Project?  {#category-b}

You may include the licenses and/or projects described in this section in an Apache Software Foundation product **IF** they meet the specified conditions. 

### Appropriately Labelled Condition
In all Category B cases our users should not be surprised at their inclusion in our products. 
If we attach an appropriate and prominent label to the distribution,
users are less likely to be unaware of restrictions significantly
different from those of the Apache License. An appropriate and 
prominent label is a label the user will read while learning about the 
distribution - for example in a README, and it should identify the third-party product and 
its licensing, and provide a url to the its homepage. Please also comply with 
any attribution/notice requirements in the specific license in question. 

### Binary-only Inclusion Condition
Any Category B licensed works may be included in binary-only form in Apache Software Foundation convenience binaries.
Do not include Category B licensed works in source releases.

### "Weak Copyleft" Licenses

Each license in this section requires some degree of reciprocity. This may require
additional action to minimize the chance that a user of
an Apache product will create a derivative work of a differently-licensed
portion of an Apache product without being aware of the applicable
requirements.
 
You may include software under the following licenses in binary form
within an Apache product if you label the inclusion appropriately (see above):

- Common Development and Distribution Licenses: [CDDL 1.0](https://opensource.org/licenses/CDDL-1.0) and [CDDL 1.1](https://spdx.org/licenses/CDDL-1.1.html)
- Common Public License: [CPL 1.0](http://www.opensource.org/licenses/cpl1.0.php)
- Eclipse Public License: [EPL 1.0](http://www.eclipse.org/legal/epl-v10.html)
- IBM Public License: [IPL 1.0](http://www.opensource.org/licenses/ibmpl.php)
- Mozilla Public Licenses: [MPL 1.0](http://www.mozilla.org/MPL/1.0/),
  [MPL 1.1](http://www.mozilla.org/MPL/1.1/), and
  [MPL 2.0](http://www.mozilla.org/MPL/2.0/)
- Sun Public License: [SPL 1.0](http://opensource.org/licenses/SPL-1.0)
- [Open Software License 3.0](https://opensource.org/licenses/OSL-3.0)
- [Erlang Public License](http://www.erlang.org/EPLICENSE)
- [UnRAR License](https://github.com/jukka/java-unrar/blob/master/license.txt) (only for unarchiving)
- [SIL Open Font License](http://scripts.sil.org/OFL)
- [Ubuntu Font License Version 1.0](https://www.ubuntu.com/legal/font-licence)
- [IPA Font License Agreement v1.0](https://fedoraproject.org/wiki/Licensing/IPAFontLicense)
- [Ruby License](https://www.ruby-lang.org/en/about/license.txt) (including the older version when GPLv2 was a listed alternative [Ruby 1.9.2 license](https://svn.ruby-lang.org/cgi-bin/viewvc.cgi/tags/v1_9_2_320/COPYING?view=markup))
- Eclipse Public License 2.0: [EPL 2.0](https://www.eclipse.org/legal/epl-2.0/)

By including only the object/binary form, there is less exposed
surface area of the third-party work from which someone might derive a work. This addresses the second guiding principle of this policy.
 
For small amounts of source code that the ASF product directly consumes at runtime, and for which that source is
unmodified and unlikely to be changed anyway (say, by virtue of being specified by a
standard), you may include appropriately labeled source code. An example of this is the web-facesconfig_1_0.dtd, whose
inclusion is mandated by the JSR 127: JavaServer Faces specification.

### Including Creative Commons Attribution content  {#cc-by}
Works under the [Creative Commons Attribution (CC-BY)](http://creativecommons.org/licenses/by/4.0/) licenses (2.5, 3.0, and 4.0)
contain terms related to "Effective Technological Measures", which may come as a surprise to users. Thus you should label them appropriately and only include them in binary form. 

### Unmodified media under the Creative Commons Attribution-Share Alike license  {#cc-sa}

You may include unmodified media under the 
[Creative Commons Attribution-Share Alike 2.5](http://creativecommons.org/licenses/by-sa/2.5/), 
[Creative Commons Attribution-Share Alike 3.0](http://creativecommons.org/licenses/by-sa/3.0/) and [Creative Commons Attribution-Share Alike 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license in Apache products, subject to the licenses attribution clauses which may require 
LICENSE/NOTICE/README changes. For any other type of CC-SA licensed work, contact the Legal PMC.

Note that media is intended to mean binary visual/video/audio elements used in our documentation. It is not intended to mean inclusion in our source code. 

### Can I copy code from Stack Overflow and contribute it to an ASF project? {#stackoverflow}

No, not without contacting the original author and getting permission from them to use the code in an Apache project under the Apache License 2.0. 

### Doug Lea's concurrent library  {#concurrent}

Doug Lea's concurrent library is public domain, but contains some Sun files which are not public domain. You may include this library in ASF products much like the resources in the 'weak copyleft' list above. 
&quot;It may be included in binary form within an Apache product if the inclusion
is appropriately labeled&quot;. If using the source, remove the files Sun licensed to Doug and 
treat as Category A (or get the files from 
[Harmony](http://svn.apache.org/repos/asf/harmony/standard/classlib/trunk/modules/concurrent/src/main/java/java/util/concurrent/)).

### Adding OSGi metadata to weak copyleft binaries  {#osgi-category-b}

You can insert OSGi metadata into 'Category B' licensed jars, provided that you include a note that this has occurred in the 
prominent labeling for the jar. 

### Cobertura reports  {#cobertura}
  
You may include Cobertura reports in ASF distributions.

### Handling licenses that prevent modification  {#no-modification}

There are licenses that give broad rights for redistribution of
**unmodified** copies. Such licenses are not open source, but they
do satisfy the second and third guiding principles above.

Apache projects must not include material under such licenses in
version control or in released source packages. It is however acceptable
for a build process to automatically download such non-software materials
like fonts and standardized data and include them in the resulting
binaries. Such use makes it clear that these dependencies are not a part
of the open source code of the project.

You may use material under the following licenses, as described above:

- [CMaps for PDF CJK Fonts](http://www.adobe.com/devnet/font/#pcfi)
- JCR API jar ([Day Spec License](http://www.day.com/maven/jsr170/licenses/day-spec-license.htm) + 
  [Additional License](http://www.day.com/maven/jsr170/jars/LICENSE.txt))
- [WSDL (2004) Schema Files License](https://issues.apache.org/jira/browse/LEGAL-385)

### Including build tools in ASF products  {#build-tools}

Many languages have developed ecosystems of associated tools that aid
in the building of artifacts for distribution.  While such tools may not
always be made available under an otherwise compatible license, we have approved specific
tools for inclusion in Apache distributions when they are used for
that specific purpose. 

Note that the tool must not affect the licensing of the project source code. We also expect that our use of the tooling to build our source code is 
its typical use.

To date, we have approved the following tools for such use:

- The Autotools family of products, specifically:
    - [Autoconf](http://www.gnu.org/software/autoconf/)
    - [Automake](http://www.gnu.org/software/automake/)
    - [Libtool](http://www.gnu.org/software/libtool/)
    - [mkinstalldirs.sh](http://www.gnu.org/software/hello/manual/gettext/mkinstalldirs.html)
- [OCamlMakefile](http://hg.ocaml.info/release/ocaml-make/)
- [setup.rb](http://i.loveruby.net/en/projects/setup/)

### Including Perl licensed header files when creating dynamically loaded XS modules

Developing Perl bindings which link compiled C code to create dynamically loaded XS modules requires including header files licensed under the Perl license (http://dev.perl.org/licenses/ - GPL-any/Artistic1, with exceptions). 

You may include these header files - XSUB.h, perl.h and EXTERN.h (see: [LEGAL-79](https://issues.apache.org/jira/browse/LEGAL-79)). 

### Including Doxygen-generated config files

You may use these files as long as you remove the generated comments. 

### Can Apache projects have external dependencies on Ruby licensed works?  {#ruby-license}

A project written primarily and obviously in Ruby can have a dependency either on Matz's Ruby Interpreter (MRI), 
or on any Gem which is licensed under the [Ruby license](http://www.ruby-lang.org/en/LICENSE.txt).  
Of course Gems written under other licenses (such as MIT) may also be OK, depending on the license.

Also note that the Ruby license is listed on the 'Category B' Weak Copyleft list above for binary usage (for example JRuby). 

### From Java 9 onwards, Javadoc can include search functionality that includes JavaScript under other open source licenses. Can Apache projects include this javadoc?

From Java 9 onwards, Javadoc can include JavaScript under MIT, MIT OR GPL-3.0, or GPL-2.0 WITH ClasspathException-2.0. Apache binary releases (including Maven javadoc jars) and Apache websites may include this for their javadoc. It must not be included in source releases.


## Category X: What can we NOT include in an ASF Project?  {#category-x}

You may NOT include the following licenses within Apache products:

- Not OSD-compliant:
    - Binary Code License (BCL)
    - [Intel Simplified Software License](https://software.intel.com/en-us/license/intel-simplified-software-license)
    - [JSR-275 License](https://github.com/unitsofmeasurement/jsr-275/blob/0.9.3/LICENSE.txt)
    - Field of use restrictions:
        - [Microsoft Limited Public License](https://www.openhub.net/licenses/mslpl)
        - [Amazon Software License (ASL)](https://aws.amazon.com/asl/)
        - [Java SDK for Satori RTM license](https://github.com/satori-com/satori-rtm-sdk-java/blob/master/LICENSE)
        - [Redis Source Available License (RSAL)](https://redislabs.com/community/licenses/)
        - [Booz Allen Public License](http://boozallen.github.io/licenses/bapl)
        - [Confluent Community License Version 1.0](https://www.confluent.io/confluent-community-license/)
        - [Business Source License 1.1](https://spdx.org/licenses/BUSL-1.1.html)
        - Any license including the [Commons Clause License Condition v1.0](https://commonsclause.com)
    - Non-commercial licenses:
        - [Creative Commons Non-Commercial](https://en.wikipedia.org/wiki/Creative_Commons_license#Non-commercial_licenses) variants
        - [Sun Community Source License 3.0](http://jcp.org/aboutJava/communityprocess/SCSL3.0.rtf)
- Places restrictions on larger works:
    - [GNU GPL 1, 2, 3](http://www.opensource.org/licenses/gpl-license.php)
        - Special exceptions to the GNU GPL (e.g. GNU Classpath) unless otherwise permitted elsewhere on this page. 
    - [GNU Affero GPL 3](http://www.opensource.org/licenses/agpl-v3.html)
    - [GNU LGPL 2, 2.1, 3](http://www.opensource.org/licenses/lgpl-license.php)
    - [QPL](https://opensource.org/licenses/QPL-1.0)
    - [Sleepycat License](http://www.opensource.org/licenses/sleepycat.php)
    - [Server Side Public License (SSPL) version 1](https://www.mongodb.com/licensing/server-side-public-license)
    - [Code Project Open License (CPOL)](http://www.codeproject.com/info/cpol10.aspx)
- Other concerns:
    - [BSD-4-Clause](https://spdx.org/licenses/BSD-4-Clause.html)/[BSD-4-Clause (University of California-Specific)](https://spdx.org/licenses/BSD-4-Clause-UC.html)
    - [Facebook BSD+Patents license](https://code.facebook.com/pages/850928938376556)
    - [NPL 1.0](https://spdx.org/licenses/NPL-1.0.html)/[NPL 1.1](https://spdx.org/licenses/NPL-1.1.html)
    - Nonsensical licenses:
        - The Solipsistic Eclipse Public License
        - [The "Don't Be A Dick" Public License](https://dbad-license.org/)
        - [JSON License](http://www.json.org/license.html)

Details of 'other concerns':

**Facebook BSD+Patents license** <br>
The Facebook BSD+Patents license includes a specification of a PATENTS file that
passes along risk to downstream consumers of our software imbalanced
in favor of the licensor, not the licensee, thereby violating our Apache
legal policy of being a [universal donor](https://s.apache.org/4Uzg).
The terms of Facebook BSD+Patents license are not a subset of those found in the ALv2, and they cannot be sublicensed as ALv2.

**NPL** <br>
The Netscape Public License is the original license for Mozilla containing 
amendments that are specific to Netscape. These
amendments allow "Netscape" (now part of AOL) to avoid the
reciprocity requirement that all other licensees must adhere to. This
disqualifies the license from meeting Open Source Definition #5 ("No
Discrimination Against Persons or Groups"). 

**Nonsensical licenses** <br>
These licenses while amusing to their creators are legally problematic. They often include subjective Field of use restrictions e.g. “Don’t be evil” with no definition of the arbiter for that subjective restriction. In some cases they may not even grant sufficient rights to conform to the OSI open source definition.  Since we do not wish to surprise our downstream consumers we forbid the use of such licenses.

**JSON license** <br>
As of 2016-11-03 the JSON license was moved to the 'Category X' license list. Prior to this, use of 
the [JSON Java library](https://github.com/stleary/JSON-java) was allowed. See Debian's page for a 
[list of alternatives](https://wiki.debian.org/qa.debian.org/jsonevil).

### They may not be distributed  {#prohibited}

Apache projects may not distribute Category X licensed components, in source or binary form; 
in ASF source code or in convenience binaries.  As with the previous question on platforms, you can rely on 
the component if its license terms do not affect the Apache product's 
licensing.  For example, using a GPL'ed tool during the build is okay, but including GPL'ed source code is not.

### You may rely on them when they support an optional feature  {#optional}

Apache projects can rely on components under prohibited licenses if the component is only needed 
for optional features. When doing so, a project shall provide the user with instructions on how
to obtain and install the non-included work. Optional means that the component is not required for
standard use of the product or for the product to achieve a desirable level of quality. The question to
ask yourself in this situation is:

* "Will the majority of users want to use my product without adding the optional components?"


## FAQ:

### Does it matter what platform an Apache product is created to work with?  {#platform}

It does not matter, unless the terms for that platform affect
the Apache product's licensing. For example, creating a product that
runs on Windows or Java, uses a web service such as Google Services or
Yahoo Search, or is a plugin for a product such as JBoss or JIRA is fine, whereas
creating a Linux kernel module is not fine because the Apache product
itself would have to be licensed under something other than the Apache License, version 2.0.

Note that this does not mean you can redistribute the platform code itself. That of course
depends on the licensing of said code. If you have any doubts as to whether the licensing
of the platform would affect the Apache code, check the legal-discuss@
archives to see if it has come up before, and if not email legal-discuss@ to find out.

### Is IP clearance required for library dependencies?  {#library-ip-clearance}

No.

[IP clearance](http://incubator.apache.org/ip-clearance/index.html)
is used to import code bases from outside Apache for future development here.
  
### How should I handle a work when there is a choice of license?  {#mutually-exclusive}

When including that work's licensing, state which license you are using and include only the license that you have chosen. Prefer
Category A to Category B to Category X. You don't need to modify the
work itself if, for example, it mentions the various licensing options
in the source headers.


### What Are Required Third-party Notices?  {#required-third-party-notices}

When a release contains third party works, the licenses covering those works may ask that you inform consumers in certain specific fashions. These *third party notices* vary from license to license. Apache releases should contain a copy of each license, usually contained in the LICENSE document. For many licenses this is a sufficient notice. Some licenses require some additional notice. In many cases, you can include this notice within the dependent artifact.      
  
A *required third-party notice* is any third party notice which the above cases don't cover.

See [Bundling Other ASF Products](/dev/licensing-howto.html#bundle-asf-product) for a note on required notices when a release contains another Apache product.
