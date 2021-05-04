Title: ASF Content Management System Test page
license: https://www.apache.org/licenses/LICENSE-2.0

[TOC]

# Usage.  {#usage}

This is a test page for the Markdown processing capabilities of the CMS.

The page is not intentionally blank, but it might as well be ...

# Title with attributes  {: .testclass #testattr }

paragraph text
with
attributes
  {: .testclass #testattr }

before table

|  A |   B |  C |
|---|---|---|
|  a  |  b |  c  |

after table

    elementid
    para [#eid]

elementid
para [#eid]

<!-- Note: attr_list does not work with the tables generator -->

    attr_list with id  {: #attrid }

attr_list with id  {: #attrid }


ENDS
