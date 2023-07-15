Title:     Downstream Distribution Branding Policy
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

# DRAFT ~ DRAFT ~ DRAFT

This **Downstream Distribution Branding Policy** defines **requirements** for
downstream software distributors that wish to distribute Apache&reg; software
products under the original Apache product name. Distributors wishing to use a
different name should follow our
[formal Trademark Policy](/foundation/marks/)

## Downstream Distribution Branding Policy  {#introduction}

Apache software products are distributed by a number of downstream entities that
provide packages for their platform. Examples include Docker images, Linux
distributors and cloud platform vendors.

The Apache Software Foundation recognizes the importance of these downstream
distributors and is happy to see them distribute Apache products under the
original Apache name providing that this policy is followed.


### Naming  {#name}

The name must be the same name as the name used by The Apache Software Foundation. The full
name of all Apache software products has the form of "Apache *ProjectName*". Note that "Apache",
"*ProjectName*" and "Apache *ProjectName*" are trademarks of The Apache Software Foundation.


### Source Code  {#source}

The source code on which the software is based must either be identical to an
Apache Software Foundation source code release or all of the following must also
be true:

- All source code changes must meet at least one of the acceptable changes criteria
  set out below.

- A version number must be used that both clearly differentiates it from an
  Apache Software Foundation release and clearly identifies the Apache Software
  Foundation version on which the software is based.

- The documentation must clearly identify the Apache Software Foundation
  version on which the software is based.

- The end user expects that the distribution channel will back-port fixes. It
  is not necessary to back-port all fixes. Selection of fixes to back-port must
  be consistent with the update policy of that distribution channel.

The acceptable changes must meet at least one of the following criteria:

- The change has accepted by the relevant Apache project community
  for inclusion in a future release. Note that the process used to accept
  changes and how that acceptance is documented varies between projects.

- A change is a fix for an undisclosed security issue; and the fix is not
  publicly disclosed as as security fix; and the Apache project has been
  [notified](/security/) of the both issue and the
  proposed fix; and the PMC has rejected neither the vulnerability report
  nor the proposed fix.

- A change is a fix for a bug; and the Apache project has been notified of
  both the bug and the proposed fix; and the PMC has rejected neither the bug
  report nor the proposed fix.

- Minor changes (e.g. alterations to the start-up and shutdown scripts,
  configuration files, file layout etc.) to integrate with the target platform
  providing the Apache project has not objected to those changes.

### Additional dependencies

Any additional dependency included in the distribution MUST be licensed under
terms that would allow an Apache project to include the dependency in an
Apache release as per the [3rd party license policy](/legal/resolved.html).

Optional dependencies, modules, add-ons, etc. available from The Apache
Software Foundation MAY be included in the distribution.

Optional dependencies, modules, add-ons, etc. available from 3rd parties
that extend the functionality of the Apache project SHOULD be provided
via separate packages but MAY be included in the distribution provided
that the project does not object.

Optional dependencies, modules, add-ons, etc. available from 3rd parties
that replace default functionality in the Apache project MUST be provided
via separate packages unless the Apache project has approved their
inclusion in the distribution.

### Bugs / security issues

Downstream software distributors must provide contact details for reporting bugs
and security vulnerabilities in the changes and/or additions included in the
distribution.

## Usage Examples  {#examples}

Based on the above policy, the following usages would be acceptable unless
project specific requirements prevent it:

- Releasing any particular revision from the development branch.

- Including fixes or features back-ported from the development branch.

- Modifying default configurations.

- Applying back-ports that require trivial changes to enable the back-port
  to apply.

- Including a range of 3rd party JDBC drivers or similar libraries to
  facilitate communication with other systems.


Based on the above policy, the following usages would not be acceptable
unless project specific requirements allow it:

- Including fixes or features back-ported from an individual committer's
  feature branch or any other branch that has not been accepted by the
  project for inclusion in a future release.

- Applying fixes not currently in ASF source control.

- Adding features not currently in ASF source control.

- Applying back-ports that require non-trivial changes to enable the
  back-port to apply.

- Silently fixing a discovered security issue without informing the PMC of
  the issue.

- Replacing the default persistence layer of a database with a 3rd party
  persistence library.


## Project Specific Requirements  {#projects}

Individual projects may modify the default requirements for modified software
distributions set out above.

The following projects are known to use a modified version of the policy above:

- Apache Subversion

Distributors MUST check with the relevant project for any project specific policy
before distributing a modified version of an Apache software project under
the Apache product name.


## Other Trademark Policies And Resources  {#other}

Please see our [formal Trademark Policy](/foundation/marks/)
and our [site map of Trademark resources][resources].

## Important Note  {#notes}

**Nothing in this ASF policy statement shall be interpreted to allow any
third party to claim any association with The Apache Software Foundation or
any of its projects or to imply any approval or support by ASF for any
third party products, services, or events.**

## Policy Version  {#version}

This is version 0.5 of this draft Apache policy document, published in September 2022.

Material changes will be marked with a new version number.

Changes will be tracked from version 1.0 onwards.


## DRAFT ~ DRAFT ~ DRAFT

[resources]: /foundation/marks/resources

