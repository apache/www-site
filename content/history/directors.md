Title: ASF History Project - Directors Timeline

license: https://www.apache.org/licenses/LICENSE-2.0

# {{title}}

<noscript>Sorry, your browser settings do not support JavaScript, so the timeline does not appear</noscript>

This timeline shows the terms of office of those who have served as Directors of The Apache Software Foundation. Hover your mouse cursor over any entry in the chart to see further information about that person's term.

<div id="timeline-tooltip" style="height: 900px;"></div>

<script type="text/javascript" src="./scripts/gstatic.com.charts.loader.js"></script>
<script type="text/javascript" src="./data/directors.js"></script>
<script type="text/javascript">
  // see https://developers.google.com/chart/interactive/docs/gallery/timeline
  google.charts.load('current',  {'packages':['timeline']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart()  {
    var container = document.getElementById('timeline-tooltip');
    var chart = new google.visualization.Timeline(container);
    var dataTable = director_data();
    var options =  {
          timeline:  { showRowLabels: false }
          };

    chart.draw(dataTable, options);
  }
</script>
