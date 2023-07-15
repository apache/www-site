Title: ASF Source Header and Copyright Notice Policy
Atom: http://mail-archives.apache.org/mod_mbox/www-legal-discuss/?format=atom "ASF legal-discuss Mailing List"
Comment: atom header to get a link like: "<link rel="alternate" title="ASF legal-discuss Mailing List" type="application/atom+xml" href="http://mail-archives.apache.org/mod_mbox/www-legal-discuss/?format=atom" />" in the generated html header (in the body it would be trivial)
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

## Purpose and intended audience  {#purpose}
This document describes how Apache committers and PMC members should handle source file licensing and copyright notices.  
It does not apply to developers outside the ASF who are applying the Apache License to their work.  The 
<a href="/licenses/LICENSE-2.0.html#apply">appendix to the Apache License</a> describes how others can apply 
the license to their work.  This page also does not describe requirements for
<a href="https://infra.apache.org/apply-license.html#new">what goes in the standard LICENSE file</a> distributed with each Apache 
product release, nor what are the <a href="/legal/resolved.html">acceptable licenses for distribution of third-party components</a>.  

## Overview  {#overview}
Apache products are composed of lots of pieces of code across numerous source files, licensed to the ASF by various authors 
who maintain ownership of their contributions.  When a PMC goes through the process of selecting, coordinating, and arranging 
all these contributions into a single product, the collective work is also protected by copyright law and is owned by 
the ASF -- even though each individual piece of code is still owned by its contributor.  An Apache product may also
include other components that were not submitted directly to the ASF, but are <a href="/legal/resolved.html">licensed in a way</a>
that is consistent with the ASF's licensing practices.

Considering all of these factors, this document describes how to:

- <a href="#headers">Label source headers of contributed source</a>
- <a href="#3party">Treat copyright and licensing of third-party works</a>
- <a href="#notice">Use the NOTICE file to collect copyright notices and required attributions</a>

This document also includes answers to <a href="#faq">Frequently Asked Questions</a>, which we update as new questions come up on the <a href="/foundation/mailinglists.html#foundation-legal">legal-discuss</a> mailing list.

## Notification of Updates to this Page  {#updates}
Updates to this page are sent to the <a href="/foundation/mailinglists.html#foundation-legal">legal-discuss</a> mailing list. 


## Source File Headers for Code Developed at the ASF  {#headers}

This section refers only to works submitted directly to the ASF by the copyright owner or owner's agent.
<ol>  
 <li id="header-existingcopyright">If the source file is submitted with a copyright notice included in it, the copyright owner (or owner's agent) must either:
    <ol type="a">
      <li>remove such notices, or</li>
      <li>move them to the NOTICE file associated with each applicable project release, or</li>
      <li>provide written permission for the ASF to make such removal or relocation of the notices.</li>
    </ol>
  </li>
 <li id="header-text">Each source file should include the following license header -- note that there should be no copyright notice in the header:

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.    

  </li>
</ol>    

## Treatment of Third-Party Works  {#3party}
<ol start="0">  
 <li id="3party-defn">The term "third-party work" refers to a work not submitted directly to the ASF by the copyright owner or owner's agent. This includes parts of a work submitted directly to the ASF for which the submitter is not the copyright owner or owner's agent. </li>
 <li id="3party-nomove">Do not modify or remove any copyright notices or licenses within third-party works.</li>
 <li id="3party-addlicense">Make sure that every third-party work includes its associated license, even if that requires 
 adding a copy of the license from the third-party download site into the distribution.</li>
 <li id="3party-noapachelicense">Do not add the standard Apache License header to the top of third-party source files.</li>
 <li id="3party-minormodsok">Minor modifications/additions to third-party source files should typically be licensed under the same terms as the rest of the third-party source for convenience.</li>
 <li id="3party-majormodpmc">The project's PMC should deal with major modifications/additions to third-party source files on a case-by-case basis.</li>
</ol>

## NOTICE file  {#notice}
<ol start="0">  
 <li id="notice-required">Every Apache distribution must include a NOTICE file in the top directory, along with the standard LICENSE file.</li>
 <li id="notice-text">The top of each NOTICE file must include the following text, suitably modified to reflect the product name and the year(s) 
 of distribution of the current and past versions of the product:

    Apache [PRODUCT_NAME]
    Copyright [XXXX-XXXX] The Apache Software Foundation

    This product includes software developed at
    The Apache Software Foundation (http://www.apache.org/).

 </li>
 <li id="notice-other">Use the remainder of the NOTICE file to include [required third-party notices][1].  
 The NOTICE file may also include copyright notices moved <a href="#header-existingcopyright">from source files submitted to the ASF</a>.</li>
 <li>See also <a href="/dev/licensing-howto.html#mod-notice">Modifications to NOTICE</a></li>
</ol>

## Frequently Asked Questions  {#faq}

### Where can I find an example of the NOTICE file that must be included in every ASF release?  {#faq-examplenotice}
See the <a href="/licenses/example-NOTICE.txt">httpd project NOTICE example</a> or the <a href="/licenses/NOTICE-2.0.txt">boilerplate NOTICE file</a>

### Does this policy apply to documentation files included in a release?  {#faq-docs}
Yes.

### Does this policy apply to content displayed on our web sites?  {#faq-webpages}
No.  Our web sites do not have an associated NOTICE file.  Instead we may soon be making the terms of such content
explicit through a "Terms of Use" or "Legal Information" link in the footer of web pages.  At this point, no action is
required for Apache web sites.

### What if my project includes its web site within a product distribution?  {#faq-siteindocs}
With <a href="#faq-exceptions">few exceptions</a>, all human-readable Apache-developed files that are included within a distribution must
include the <a href="#header-text">header text</a>.  Documentation, including web site documentation distributed with the 
release, may include the header text within some form of metadata (such as HTML comments) or as a header or footer
appearing in the visible documentation.

### What files in an Apache release do not require a license header?  {#faq-exceptions}
A file without any degree of creativity in either its literal elements or its structure is not protected by
copyright law; therefore, such a file does not require a license header.  If in doubt about the extent of the
file's creativity, add the license header to the file.

It may make sense for some other files to have no license header. Three examples are: 

- Short informational text files; for example README, INSTALL files. The expectation is that these files make it obvious which product they relate to.
- Test data for which the addition of a source header would cause the tests to fail. 
- 'Snippet' files that are included in a larger file, when the larger file would have duplicate licensing headers. 

PMCs should use their judgement, err on having a source header and contact legal-discuss@ if unsure. 

### Is a short form of the source header available?

Sometimes the situation of a file is such that the recommended Apache source header is not appropriate. 
Examples would be within images, minified JavaScript or PDFs. In those cases, the following shorter 
form may be used.

    "Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements; and to You under the Apache License, Version 2.0. "

Provide any additional licensing information relevant to the file (ie. that would ordinarily be in the NOTICE) 
directly in the file when the short form is used.

PMCs should use their judgement, err on having a full source header and contact legal-discuss@ if unsure. 

### Does the policy apply to binary/object files, such as executables or JAR files?  {#faq-binaries}
Yes.  Even if there are no source files within the release, the LICENSE file and NOTICE file are still both required within 
every ASF distribution -- whether the unit of distribution is a .jar, .msi, .tar.gz, .zip, .exe installer, or any 
other file format used for distributions.  For example, Windows .exe files must not be used as a unit of distribution 
unless they are installers and include the LICENSE and NOTICE files in their installation.

### Does this policy apply to third-party binary/object files included within an ASF release?  {#faq-3partybinaries}
Yes.  See the policy's <a href="#3party">third-party works</a> section, particularly the 
<a href="#3party-addlicense">requirement</a> to ensure a license exists for each third-party work.

### Do images or other media require a copyright line in the NOTICE file?  {#faq-media}
If the media was contributed directly to an ASF project, the contributor has the option to insert their copyright notice 
in the  NOTICE file, as is <a href="#header-existingcopyright">described for source files</a>.  If the media comes from a 
third-party source (not contributed directly to the project), then any copyright notice that is obviously associated with 
the media should be copied into the NOTICE file. 

### Why is a licensing header necessary?  {#faq-whyheader}
License headers allow someone examining the file to know the terms governing use of the work, even when it is distributed without 
the rest of the distribution.  Without a licensing notice, it must be assumed that the author has reserved all rights, 
including the right to copy, modify, and redistribute.

### Does this policy apply to projects outside the ASF that use the Apache License?  {#faq-nonasf}
No.  This is strictly an ASF policy.  Other projects using the Apache License should still refer to the 
<a href="/licenses/LICENSE-2.0.html#apply">license's appendix</a> for guidance on applying a header to their source files.


  [1]: /legal/resolved.html#required-third-party-notices
