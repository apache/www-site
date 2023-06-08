Title: Applying the Apache license, version 2.0

This document is to help Apache developers understand what they need to do to apply the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License, Version 2.0</a> or _ALv2_ to Apache software, including source code, documentation, and binary distributions. It is descriptive guidance, and does not supplant or otherwise modify any of the terms within the license itself. In case of uncertainty, consult <a href="https://www.apache.org/legal" target="_blank">general Apache policy</a>.

Information on other Apache-related licenses and updates regarding compatibility with other <a href="https://www.opensource.org" taarget="_blank">open source</a> licenses appears in the <a href="https://www.apache.org/licenses/" target="_blank">Licenses</a> section.

<h2>Contents</h2>

<ul>
<li><a href="#license">Understanding the 2.0 license</a></li>
<li><a href="#new">Applying the license to new software</a></li>
<li><a href="#existing">Updating existing software</a></li>
<li><a href="#faq-existing">Frequently asked questions about updates</a></li>
<li><a href="#faq">Other frequently asked questions</a></li>
</ul>
  

<h2 id="license">Understanding the 2.0 license<a class="headerlink" href="#license" title="Permanent link">&para;</a></h2>
<p>The ALv2 is <a href="https://www.apache.org/licenses/LICENSE-2.0.txt" target="_blank">this set</a> of self-documented copyright and patent licensing terms. Anyone can use the license, not just the <abbr title="Apache Software Foundation">ASF</abbr> and its projects, and can be <a href="https://www.apache.org/licenses/LICENSE-2.0.html#apply" target="_blank">applied</a> by reference to the versioned license terms. An appendix to the license describes how to do this.

**Note** that the ASF does not use copyright assignment and that the original authors retain the copyrights for individual parts of the collective work . The method described in the appendix is only suitable for copyright owners, so the ASF uses a variation of
this method.

Section 4d of the <a href="https://www.apache.org/licenses/LICENSE-2.0.txt" target="_blank">license</a> provides for attribution notices to be included with a work in a <a href="https://www.apache.org/licenses/example-NOTICE.txt" target="_blank">NOTICE</a> file, so the attribution notices remains, in some form, within any derivative works. Apache projects **must** <a href="http://www.apache.org/legal/src-headers.html#notice" target="_blank">include correct NOTICE documents</a> in every distribution.
  
<h2 id="new">Applying the license to new software<a class="headerlink" href="#new" title="Permanent link">&para;</a></h2>

To apply the ALv2 to a new software distribution, include one copy of the license text by copying the contents of <a href="https://www.apache.org/licenses/LICENSE-2.0.txt" Target="_blank">LICENSE-2.0.txt</a> into a file called LICENSE in the top directory of your distribution. If the distribution is a jar or tar file, try to add the LICENSE file first in order to place it at the top of the archive. This covers the collective licensing for the distribution.

In addition, you **must** include a correct <a href="https://www.apache.org/legal/src-headers.html#notice" target="_blank">NOTICE file</a> in the same directory as the LICENSE file.

Each original source document (code and documentation, but not the LICENSE and NOTICE files) **should** include <a href="https://www.apache.org/legal/src-headers.html#headers" target="_blank"> a short license header</a> at the top. If the distribution contains  documents not covered by an <a href="https://www.apache.org/licenses/icla.txt" target="_blank">ICLA</a>,
<a href="https://www.apache.org/licenses/cla-corporate.txt" target="_blank">CCLA</a> or <a href="https://www.apache.org/licenses/software-grant.txt" target="_blank">Software Grant</a> (such as third-party libraries), consult the <a href="https://www.apache.org/legal/resolved.html" target="_blank">policy guide</a>.

<h2 id="existing">Updating existing software<a class="headerlink" href="#existing" title="Permanent link">&para;</a></h2>

<p>In brief, the aim is to achieve a final distribution as described above in <a href="#new">applying the license to new software</a>. Some conversion tools are listed <a href="http://www.apache.org/legal/src-headers.html#faq-update-scripts">here</a>.</p>

<h2 id="faq-existing">Frequently asked questions about updates<a class="headerlink" href="#faq-existing" title="Permanent link">&para;</a></h2>

<h4 id="convert_to_2_0">Do I have to convert Apache licenses in source code from 1.1 to 2.0?<a class="headerlink" href="#convert_to_2_0" title="Permanent link">&para;</a></h4>

If the Apache Software Foundation owns and distributes the code, then <strong>Yes</strong>. All software distributions were to be converted to the new license by March 1, 2004.

If the ASF does not own the code, the decision is up to the copyright owner.  Naturally, we strongly recommend that you upgrade to the new license.

<h4 id="conversion">Do I have to convert old versions and branches of code to the new license?<a class="headerlink" href="#conversion" title="Permanent link">&para;</a></h4>

Only if you want the ASF to make a new release of that code. "Dead" branches of code do not have to be updated.

<h2 id="faq">Other frequently asked questions<a class="headerlink" href="#faq" title="Permanent link">&para;</a></h2>

<h4 id="info-whereis">Where can I find more information?<a class="headerlink" href="#info-whereis" title="Permanent link">&para;</a></h4>

Start with the <a href="https://www.apache.org/legal" target="_blank">legal affairs home page</a>.

<h4 id="license-whereis">Where do I find a copy of the new license?<a class="headerlink" href="#license-whereis" title="Permanent link">&para;</a></h4>

<a href="https://www.apache.org/licenses/" target="_blank">apache.org/licenses/</a>

<h4 id="copy-per-file">Do I have to have a copy of the license in each source file?<a class="headerlink" href="#copy-per-file" title="Permanent link">&para;</a></h4>

You only need to add one full copy of the license per distribution. See the <a href="https://www.apache.org/legal/src-headers.html" target="_blank">policy</a>.

<h4 id="attribution">In my current source files I have attribution notices for other works. Do I put this in each source file now?<a class="headerlink" href="#attribution" title="Permanent link">&para;</a></h4>

See the <a href="https://www.apache.org/legal/src-headers.html" target="_blank">policy</a>.

<h4 id="contributor-copyright">Should individual committers add copyright statements to the NOTICE or source code files?<a class="headerlink" href="#contributor-copyright" title="Permanent link">&para;</a></h4>

No. Though committers retain copyright, Apache asks that they do not add copyright statements. See the <a href="https://www.apache.org/legal/src-headers.html" target="_blank">policy</a> for more details.

<h4 id="license-file-name">Can we call the LICENSE and NOTICE files LICENSE.txt and NOTICE.txt?<a class="headerlink" href="#license-file-name" title="Permanent link">&para;</a></h4>

You can do this, however we prefer that you call the files LICENSE and NOTICE.

<h4 id="license-include">Should we include the license in source files for documentation (e.g. XML that transforms to HTML)?<a class="headerlink" href="#license-include" title="Permanent link">&para;</a></h4>

Yes. See the <a href="https://www.apache.org/legal/src-headers.html" target="_blank">policy</a> for more details.
