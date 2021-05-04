<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="xml" omit-xml-declaration="yes"/>

<xsl:template match="eccnmatrix">
  <table width="100%" border="1" class="eccnmatrix">

    <xsl:for-each select="Project">
      <tr>
        <th colspan="4">
          <a>
            <xsl:attribute name="href">
              <xsl:value-of select="@href"/>
            </xsl:attribute>
            <xsl:value-of select="Name" />
          </a>
        </th>
      </tr>
      <tr>
        <th>Product Name</th>
        <th>Versions</th>
        <th>ECCN</th>
        <th>Controlled Source</th>
      </tr>
    
      <xsl:for-each select="Product">
        <xsl:variable name="prodspan" select="count(Version)" />

        <xsl:for-each select="Version">
          <xsl:variable name="sources">
            <xsl:for-each select="ControlledSource">
              <xsl:if test="position() > 1">
                <xsl:text>, </xsl:text>
              </xsl:if>
              <a>
                <xsl:attribute name="href">
                  <xsl:value-of select="@href"/>
                </xsl:attribute>
                <xsl:attribute name="title">
                  <xsl:value-of select="Why"/>
                </xsl:attribute>
                <xsl:value-of select="Manufacturer" />
              </a>
            </xsl:for-each>
          </xsl:variable>

          <tr>
            <xsl:if test="position() = 1">
              <td>
                <xsl:attribute name="rowspan">
                  <xsl:value-of select="$prodspan" />
                </xsl:attribute>
                <xsl:value-of select="../Name" />
              </td>
            </xsl:if>
            <td>
              <xsl:value-of select="Names" />
            </td>
            <td>
              <xsl:value-of select="ECCN" />
            </td>
            <td>
              <xsl:copy-of select="$sources" />
            </td>
          </tr>

        </xsl:for-each>
      
      </xsl:for-each>

    </xsl:for-each>

  </table>
</xsl:template>


</xsl:stylesheet>

