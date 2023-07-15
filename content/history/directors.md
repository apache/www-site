Title: ASF Board of Directors Timeline
license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

This timeline shows who has served when on the Board of Directors of The ASF.

It is <em>not</em> an official record - just an informational page.

<noscript>Sorry - the timeline diagram requires JavaScript.</noscript>

<div id="graph" style="width: 100%; height:500em;"></div>

<script src="./scripts/echarts.js"></script>
<script src="./data/directors.js"></script>
<script src="./scripts/directors-timeline.js"></script>
<script type="text/javascript">
  window.asf.directorsTimelineChart(document.getElementById('graph'), window.asf.getDirectorsTimelineData())
</script>
