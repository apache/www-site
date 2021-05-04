Title: ASF Content Management System Test page (no TOC)
license: https://www.apache.org/licenses/LICENSE-2.0

<style type="text/css">
.table-bottom
  {
  margin-bottom: 20px;
}
</style>
Leading paragraph before first title
c.f. http://www.apache.org/foundation/

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

before HTML table (class = table)

<table class="table">
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Rich Bowen</td>
<td>Shane Curcuru</td>
<td>Bertrand Delacretaz</td>
</tr>
<tr>
<td>Jim Jagielski</td>
<td>Chris Mattmann</td>
<td>David Nalley</td>
</tr>
<tr>
<td>Brett Porter</td>
<td>Sam Ruby</td>
<td>Greg Stein</td>
</tr>
</tbody>
</table>

after HTML table

before HTML table (class = table-condensed)

<table class="table-condensed">
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Rich Bowen</td>
<td>Shane Curcuru</td>
<td>Bertrand Delacretaz</td>
</tr>
<tr>
<td>Jim Jagielski</td>
<td>Chris Mattmann</td>
<td>David Nalley</td>
</tr>
<tr>
<td>Brett Porter</td>
<td>Sam Ruby</td>
<td>Greg Stein</td>
</tr>
</tbody>
</table>

after HTML table

before HTML table (class = table-bottom)

<table class="table-bottom">
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Rich Bowen</td>
<td>Shane Curcuru</td>
<td>Bertrand Delacretaz</td>
</tr>
<tr>
<td>Jim Jagielski</td>
<td>Chris Mattmann</td>
<td>David Nalley</td>
</tr>
<tr>
<td>Brett Porter</td>
<td>Sam Ruby</td>
<td>Greg Stein</td>
</tr>
</tbody>
</table>

after HTML table

before HTML table (class = None)

<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Rich Bowen</td>
<td>Shane Curcuru</td>
<td>Bertrand Delacretaz</td>
</tr>
<tr>
<td>Jim Jagielski</td>
<td>Chris Mattmann</td>
<td>David Nalley</td>
</tr>
<tr>
<td>Brett Porter</td>
<td>Sam Ruby</td>
<td>Greg Stein</td>
</tr>
</tbody>
</table>

after HTML table

<!-- Note: attr_list does not work with the tables generator -->

paragraph
with
elementid marker [#marker]

ENDS
