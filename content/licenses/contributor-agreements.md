Title: ASF Contributor Agreements
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

The Apache Software Foundation uses various agreements to 
accept contributions of software code and documentation from individuals and corporations, and to accept
larger grants of existing software products.

These agreements help us achieve our goal of providing reliable and
long-lived software products through collaborative, open-source software
development. In all cases, contributors retain full rights to use their
original contributions for any other purpose outside of Apache, while
providing the ASF and its projects the right to distribute and build upon
their work.

## Contributor License Agreements  {#clas}

* ICLA: [Individual Contributor License Agreement](icla.pdf)
* CCLA: [Corporate Contributor License Agreement](cla-corporate.pdf)

All contributors of ideas, code, or documentation to
any Apache projects must complete, sign, and submit via
email an [Individual Contributor License Agreement](icla.pdf) (ICLA). 

The purpose of this agreement is to clearly define the
terms under which intellectual property has been contributed to the ASF and
thereby allow us to defend the project should there be a legal dispute
regarding the software. An individual must have submitted a signed ICLA to the ASF before we give them commit rights to any ASF project.

For a corporation that assigns employees to work on an Apache project,
a [Corporate CLA](cla-corporate.pdf) (CCLA) is available to cover contributing
intellectual property via the corporation that may have been assigned as
part of an employment agreement.

Note that a Corporate CLA does not remove
the need for every developer to sign their own ICLA as an individual, which
covers both contributions the corporation signing the CCLA owns, and those it does not own.

The CCLA legally binds the corporation, so a person with
authority to enter into legal contracts on behalf of the corporation must sign it.

The ICLA an individual signs is not tied to any employer they may have, so we recommend that individuals use their personal email addresses in the contact details, rather than their @work addresses.

The ASF publishes your _legal name_ unless you provide an alternative _display name_.
For example, if your full name is Andrew Bernard Charles Dickens, but you wish
to be known as Andrew Dickens, enter the latter as your Display Name.

We do not publish your postal address.

If you are submitting an ICLA in response to an invitation from a PMC, be sure to
identify the project via the form field "notify project". Also, choose a preferred ID that
is not already in use. Apache IDs must start with an alphabetic character and contain
at least two additional alphanumeric characters (no special characters).
You can check for IDs in use [here](http://people.apache.org/committer-index.html).

## Software License Grant  {#grants}

* [Software Grant Agreement](software-grant-template.pdf)

When an individual or corporation decides to donate a body of existing
software or documentation to one of the Apache projects, they need to
execute a formal [Software Grant Agreement](software-grant-template.pdf) (SGA) with
the ASF. Typically, they do this after negotiating approval with the ASF
[Incubator](http://incubator.apache.org/) or one of the PMCs, since the ASF
does not accept software unless there is a viable community available to
support it as part of a collaborative project.

## How-To: Submitting license agreements and grants  {#submitting}

You may sign documents by hand or by electronic signature, and submit them by email. The ASF no longer accepts submissions by postal mail or by fax.

When submitting by email, please fill in the form with a PDF viewer, then
print and sign it, scan all pages into a single PDF file, 
and attach the PDF file to an email addressed to secretary@apache.org. 

No printer? See [CLA Frequently Asked Questions](cla-faq.html#printer)

If possible, send the attachment from the email address you list in the document.
Send only one attached document per email.

If you prefer to sign electronically, fill in the form, save it locally (e.g. icla.pdf), and sign the
file by preparing a detached PGP signature. For example,

>gpg --armor --detach-sign icla.pdf

This will create a file named `icla.pdf.asc`. 

Send both the file (icla.pdf) and the signature (icla.pdf.asc) as attachments in the same email to secretary@apache.org. Send only one 
document (file plus signature) per email. 

Do not submit your **public key** to Apache. Instead, upload your public key to `keyserver.ubuntu.com`.

The files you submit should be named

  - icla.pdf and icla.pdf.asc for individual agreements
  - ccla.pdf and ccla.pdf.asc  for corporate agreements
  - software-grant.pdf and software-grant.pdf.asc for grants

We do not accept zip files or other archives.
We do not accept links to files; you must attach the files to the email.

Note that typing your name in the field at the bottom of the document is not signing,
regardless of the font that you use.

A valid signature involves one of:

  - Writing your signature by hand on a printed copy of the document
  - Digitally signing the document by hand-drawing a signature
  - Signing the document digitally via gpg
  - Signing the document via DocuSign
 
 We will not accept unsigned documents.

## Questions?  {#questions}

For answers to frequently asked questions about contribution agreements, consult our 
[CLA Frequently Asked Questions](cla-faq.html) page.
