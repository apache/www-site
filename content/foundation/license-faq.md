Title: Apache Licensing and Distribution FAQ
license: https://www.apache.org/licenses/LICENSE-2.0


This page answers most of the common queries that we receive about our
licenses, and about licensing, packaging or redistributing our software. For 
non-licensing questions, see our [General FAQ](/foundation/preFAQ.html).

# Frequent Questions about Apache Licensing #

1.  [Where can I find the Apache license?](#License) 

1.  [Why are license files different for different Apache Software Foundation
projects?](#Scope) 

1.  [Is 'Apache' a trademark?](#Marks) 

1.  [Is software from The Apache Software Foundation free?](#IsItFree) 

1.  [What are the U.S. Export Classification Control Numbers (ECCNs) for
the various Apache software packages?](#Export) 

1.  [May I license my own software under the Apache license?](#My-License) 

1.  [How should I apply the Apache License to my own software?](#Apply-My-Software)

1.  [May I re-use (and modify) the ASF Contributor License Agreements
(CLAs) for my own purposes?](#CLA-Usage) 

1. [May I re-use (and modify) the Apache License 2.0 itself?](#mod-license)

1.  [I've made improvements to Apache code; may I distribute
it?](#Distribute-changes) 

1.  [May I call my modified code 'Apache'?](#Name-changes) 

1.  [I have made changes to an Apache package and I want to distribute
it. Do I need to contribute the changes to the Apache Software
Foundation?](#Must-Contribute) 

1.  [May I translate the Apache license into my local language for my
redistribution of Apache packages?](#Translation) 

1.  [Is the Apache license compatible with the GPL (GNU Public
License)?](#GPL) 

1.  [What is the scope of patent grants made to the ASF?](#PatentScope) 

1.  [Can ASF PMCs host projects that are not under the Apache License?](#licenses)

1.  [Are contributors' employers required to sign a CCLA?](#cclas-not-required)

1.  [What is the provenance of source code from the ASF?](#provenance)

If none of the above addresses your query, check the [resources at
the bottom of this page](#resources) for further information.



## Where can I find the Apache license?  {#License}

You can find the Apache License 2.0 (the current version) here: [http://www.apache.org/licenses/LICENSE-2.0.txt](/licenses/LICENSE-2.0.txt) 

These are two older versions that we no longer use:

- Apache Software License 1.1:
[http://www.apache.org/licenses/LICENSE-1.1.txt](/licenses/LICENSE-1.1.txt) 

- Apache Software License 1.0:
[http://www.apache.org/licenses/LICENSE-1.0.txt](/licenses/LICENSE-1.0.txt) 

## Why are license files different for different Apache Software Foundation projects?  {#Scope}

While the core Apache-developed code will be under one of the Apache
licenses, other third-party works may have been included and their license
text may have been added to the Apache project's LICENSE or NOTICE files.
Alternatively, they may be available separately.

## Is 'Apache' a trademark?  {#Marks}

'Apache', 'Apache Software Foundation', the Apache logo, and the
various Apache project names and logos are either registered trademarks or trademarks of The Apache
Software Foundation in the United States and other countries. 
See our [Trademark Policy](marks/) for details of how to use Apache project trademarks, and our helpful [site map of trademark resources](marks/resources).

## Is software from The Apache Software Foundation free of charge?  {#IsItFree}

Yes. **All** software developed by **all** projects of The Apache Software
Foundation is freely available without charge from the Foundation's web
sites. This is specified in the Foundation's [Articles of
Incorporation](records/incorporator.html) and [explained in 
more detail](/free/) why our software is always free (no charge).

This is regardless of the use of the software. We do not distinguish between personal, internal, or 
commercial use of our software, and we do not charge for any of these uses. A reminder, however, that the terms 
of [our license](#License) always apply.

## What are the U.S. Export Classification Control Numbers (ECCNs) for the various Apache software packages?  {#Export}

See the [ASF Exports Classifications and Source
Links](/licenses/exports/) page.

## May I license my own software under the Apache license?  {#My-License}

Certainly. Version 2.0 of the license was designed to be reusable, and many parties other than the ASF use it.

## How should I apply the Apache License to my own software?  {#Apply-My-Software}

Include a copy of the Apache License, typically in a file called LICENSE, in your work, and consider also including a NOTICE file. 

It is also valuable to tag each of your source-code files in case they become detached from the LICENSE file. To apply the Apache License to your source-code files, one approach is to attach the following notice to as a comment at the top of each file. Replace the copyright templates with your own identifying information:

    Copyright [yyyy] [name of copyright owner]
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        https://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

A shorter variant you may wish to use is:

    Copyright [yyyy] [name of copyright owner]
    SPDX-License-Identifier: Apache-2.0

Note that the Apache Software Foundation uses a different source header that is related to our use of a CLA. Our instructions for our project's source headers are [here](/legal/src-headers.html#headers).


## May I re-use (and modify) the ASF Contributor License Agreements (CLAs) for my own purposes?  {#CLA-Usage}

Yes, you can re-use and modify them; You just can't hold the ASF
legally responsible if these documents are not exactly what you intend them
to be. We recommend that you obtain your own legal advice so you know
exactly what you are getting yourself into.

If you adapt these agreements for your own purposes, make
sure that the phrase 'Apache Software Foundation' and any confusingly
similar references or parts that specifically refer to the Apache
organisation do not appear in your version of the agreements (except to
note that your version is derived and differs from the original provided by
the ASF).

## May I re-use (and modify) the Apache License 2.0 itself?  {#mod-license}

You may re-use our license unchanged, and also modify it.

If you modify it, you are on your own from a legal point of view, and the result
is NOT the Apache License, just a new license inspired by ours.

This means that the terms 'Apache License', 'Apache', and any similar references
to the ASF cannot appear in your modified license, other than to state that it differs
from the original.

Also, you cannot use 'Apache' in the name of the modified license.
Names like "Apache License with such-and-such clause", for example, are not acceptable,
as they cause confusion.

Creating a new license is a non-trivial task. If you do that we recommend that you get your own legal advice.

Some modifications are trivial or purely cosmetic in nature and do not alter the
license in any meaningful way. In such cases, the result would still be considered
the Apache License, and you do not need to change the name in these cases. Using
"https:" for the URL in the license header instead of "http:", or changing the font
or line spacing to make the license more readable, are examples of such changes. If
you are uncertain whether your changes are trivial, you should seek your own legal
advice.

## I've made improvements to the Apache code; may I distribute the modified result?  {#Distribute-changes}

Absolutely -- subject to the [terms of the Apache license](/licenses/LICENSE-2.0#redistribution), 
of course. You can give your modified code away for free, sell it, keep it to
yourself, or whatever you like. Just remember that the original code is
still covered by the Apache license and you must comply with its terms.
Even if you change every single line of the Apache code you're using, the
result is still based on the Foundation's licensed code. You may distribute
the result under a different license, but you need to acknowledge the use
of the Foundation's software. To do otherwise would be stealing.

If you think others would find your changes useful, though, we *do*
encourage you to submit them to the appropriate Apache project for possible
inclusion.



## May I call my modified code 'Apache'?  {#Name-changes}

**No**. You may, however, use phrasing such as 'based on
Apache', 'powered by Apache', or 'based on Apache technology'. You **must
not** use the Foundation's marks in any way that states or implies, or can
be interpreted as stating or implying, that the Apache Software Foundation endorses or created the final product. For example, it would be
acceptable to use a name like 'SuperWonderServer powered by Apache', but
never a name like 'Apache SuperWonderServer'. This is similar to the
distinction between a product named 'Microsoft Burp' and 'Burp for
Microsoft Windows'.

You may similarly identify the specific Foundation project whose code
you're using, such as with 'based on Apache Xerces' or 'powered by Apache
Tomcat technology'.

If you wish to use a name including any of the Foundation's marks, such as
the word 'Apache', ask our permission first. See our
[Trademark Policy](/foundation/marks/) for more details.

## I have made changes to an Apache package and I want to distribute them. Do I need to contribute them to the Apache Software Foundation?  {#Must-Contribute}

No. You can keep your changes a secret if you like. But please seriously consider contributing your changes to the project from which your got the original code. We all benefit when you do.

## May I translate the Apache license into my local language for my redistribution of Apache packages?  {#Translation}

Yes, you may translate the license text into your local language.
**However** , any such translated text is only for the convenience of
understanding, and is *not* legally binding. Only the English-language
version of the license, *which you must continue to include in your
packaging* , is authoritative and applicable in case legal interpretation
is required.

## Is the Apache license compatible with the GPL (GNU Public License)?  {#GPL}

From the [Free Software
Foundation](http://www.fsf.org/licensing/licenses/#SoftwareLicenses)
website:

>  
>  <span class="link-external"> [Apache License, Version
2.0](/licenses/LICENSE-2.0) </span>
>
This is a free software license, compatible with version 3 of the GPL.
Please note that this license is not compatible with GPL version 2, because
it has some requirements that are not in that older version. These include
certain patent termination and indemnification provisions.



## What is the scope of patent grants made to the ASF?  {#PatentScope}
<style>
  dl dt  {float: left}
  dl dd  {margin-left: 3em}
</style>

This is a four part question:

<dl>
<dt>Q1:</dt>
<dd>If I own a patent and contribute to a Work, and, at the time my
contribution is included in that Work, none of my patent's claims are
subject to Apache's Grant of Patent License, is there a way any of
those claims would later become subject to the Grant of Patent License
solely due to subsequent contributions by other parties who are not
licensees of that patent?</dd>
<dt>A1:</dt>
<dd>No.</dd>
<dt>Q2:</dt>
<dd>If at any time after my contribution, I am able to license other
patent claims that would have been subject to Apache's Grant of Patent
License if they were licenseable by me at the time of my contribution,
do those other claims become subject to the Grant of Patent License?</dd>
<dt>A2:</dt>
<dd>Yes.</dd>
<dt>Q3:</dt>
<dd>If I own or control a licensable patent and contribute code to a
specific Apache product, which of my patent claims are subject to
Apache's Grant of Patent License?</dd>
<dt>A3:</dt>
<dd>The only patent claims that are licensed to the ASF are those you own
or have the right to license that read on your contribution or on the
combination of your contribution with the specific Apache product to
which you contributed as it existed at the time of your contribution.
No additional patent claims become licensed as a result of subsequent
combinations of your contribution with any other software. Note,
however, that licensable patent claims include those that you acquire
in the future, as long as they read on your original contribution as
made at the original time. Once a patent claim is subject to Apache's
Grant of Patent License, it is licensed under the terms of that Grant
to the ASF and to recipients of any software distributed by the ASF
for any Apache software product whatsoever.</dd>
<dt>Q4:</dt>
<dd>What is an Apache product?</dd>
<dt>A4:</dt>
<dd>An Apache product is a body of software being developed by the ASF
that the ASF intends to both alter and to publish as a separate line
of releases.</dd>
</dl>


## Can ASF PMCs host projects that are not under the Apache License?  {#licenses}
No. If you are an ASF PMC with a truly exceptional situation, please create a JIRA issue about it.


## Are contributors' employers required to sign a CCLA?  {#cclas-not-required}

Only if their employment situation necessitates that a CCLA be signed.
See section 4 of the ICLA for details.

Committers must sign an ICLA.  They make an individual claim that the code that
they contribute is theirs to license.  Reviewing their ICLA against their
employer's ownership interests, applicable state and national law, and specific
aspects of their employment contract and business policies will reveal that
they can or cannot make that claim regarding any particular commit to whichever
particular project they are committing in.

The CCLA is a backup document that the committer/ICLA signer may use to 
eliminate ambiguity between all these conflicting laws, contracts,
policies and job assignments.  We've never required it; many committers
are confident of their individual representations under the ICLA, many other
committers find it reassuring that their company has backed up their own
ICLA with this umbrella document.

It is the ICLA signatory's call if it is required, but it isn't exactly an easy
call for many committers employed in the IT/Software industry.

Finally, see section 8 of the ICLA, which requires signers to notify the
Foundation when their status changes in ways that may require their ICLA to
be reassessed.


# What is the provenance of source code from the ASF?  {#provenance}

Source code (including machine-readable documentation, release notes, guides,
test cases, run books, and scripts) in Apache repositories falls into three
classifications (solely for the purpose of this discussion):

#### Code developed at Apache under Apache governance, licensed to Apache by its developers under a Contributor License Agreement, distributed by Apache, and licensed to downstream users under the Apache license

This represents most code at Apache. The code contains a standard Apache license 
header which refers to the standard Apache license in the distribution.

#### Code developed elsewhere, licensed to Apache under a Software Grant Agreement, incorporated into Apache projects, distributed by Apache, and licensed to downstream users under the Apache license

This is code that is brought into Apache for future development as part 
of an Apache project. The headers on all files are changed to the standard Apache 
header. Most incubator projects start with a repository of externally-developed code and the 
Intellectual Property Clearance process is done as part of incubation. 

Code that is originally developed elsewhere and is brought into Apache for 
future development as part of an existing project must have the Intellectual Property 
Clearance process done explicitly by the PMC of the receiving project, under the 
auspices of the Incubator PMC, which must approve the process. 

#### Code developed elsewhere, received under a Category A license, incorporated into Apache projects, distributed by Apache, and licensed to downstream users under its original license

This code retains its external identity and is incorporated into an Apache project 
for convenience, to avoid referencing an external repository whose contents are not 
under control of the project. The code retains its original license, and distribution as 
part of the Apache project explicitly calls out the license. The code retains its original 
headerm, which refers to its own license in the distribution. If changes are made to the 
code while at Apache, the standard Apache header is prepended to each changed 
file. Additionally, any legally-required notices related to the code are published in the 
distribution.

# Another place to Look  {#resources}

If you have questions about The Apache Software Foundation, its projects,
or its software, we recommend the following link for more information or
assistance:

- The Foundation pre-FAQ: [Contact Apache
FAQ](/foundation/preFAQ.html) 

If you have a question specifically about the Apache license or
distribution of Apache software, and it has not been answered by this page,
[contact the Legal Affairs Committee](/legal/).
