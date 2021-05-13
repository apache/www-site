<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
                xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" >
<!--
   Stylesheet for generating a BIS email notice template from the XML
   product data in exports/index.xml

   Typical use (assuming Xalan jars are on the CLASSPATH):

   java org.apache.xalan.xslt.Process -in index.xml -xsl bisnotice.xsl \
        -param product 'Apache JAMES Server'

     or

   java org.apache.xalan.xslt.Process -in index.xml -xsl bisnotice.xsl \
        -param product 'APR-Util'

   Note that you should only select one product at a time, since the
   printing of unique Manufacturer names only works when scoped to a
   single product.

  -->
  <xsl:output method="text" indent="no"/>
  <xsl:param name="poc">Secretary, The Apache Software Foundation</xsl:param>
  <xsl:param name="apache-archive">legal-archive</xsl:param>
  <xsl:param name="source-url">http://www.apache.org/licenses/exports/</xsl:param>
  <xsl:param name="product">Apache HTTP Server</xsl:param>

  <xsl:key name="manufKey"
match="Product[contains(./Name,$product)]/Version/ControlledSource/Manufacturer"
       use="."/>

  <xsl:template match="text()"/>

  <xsl:template match="Product[contains(./Name,$product)]">
---EMAIL HEADER---
To: crypt@bis.doc.gov, enc@nsa.gov, web_site@bis.doc.gov
Cc: <xsl:value-of select="$apache-archive"/>@apache.org, {applicable project list}
Subject: Section 742.15 NOTIFICATION - Encryption
---EMAIL BODY---
SUBMISSION TYPE:      Section 742.15

SUBMITTED BY:         <xsl:value-of select="../Contact/Name"/>

SUBMITTED FOR:        The Apache Software Foundation

POINT OF CONTACT:     <xsl:value-of select="$poc"/>

MANUFACTURER(S):      <xsl:call-template name="printManufacturers"/> 

PRODUCT NAME/MODEL #: <xsl:value-of select="Name"/>

ECCN:                 5D002

NOTIFICATION:         <xsl:value-of select="$source-url"/>

----------------
</xsl:template>

  <xsl:template name="printManufacturers">
    <xsl:variable name="uniqueManufacturers" select="Version/ControlledSource/Manufacturer[generate-id(.)=generate-id(key('manufKey',.))]"/>
    <xsl:for-each select="$uniqueManufacturers">
       <xsl:if test="position() != 1">, </xsl:if>
       <xsl:choose>
         <xsl:when test=". = 'ASF'">
          <xsl:text>The Apache Software Foundation</xsl:text>
         </xsl:when>
         <xsl:otherwise>
          <xsl:value-of select="."/>
         </xsl:otherwise>
      </xsl:choose>
    </xsl:for-each>
  </xsl:template>

</xsl:stylesheet>
