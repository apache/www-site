if (!window.asf) {
  window.asf = {};
}

// code based on https://echarts.apache.org/examples/en/editor.html?c=custom-profile    
window.asf.directorsTimelineChart = function (chartDom, timelineData) {
  const myChart = echarts.init(chartDom);
  let option;

  const perPersonPixelsHeight = 20;
  const dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateFormat = new Intl.DateTimeFormat('en-US', dateFormatOptions);

  let data = [];
  const startTime = new Date(1999, 1, 1).getTime();

  // Render each person in a different color, repeating this sequence
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'indigo',
    'violet'
  ];
  let colorIndex = -1;
  timelineData.forEach(function (person) {
    if (++colorIndex > colors.length) {
      colorIndex = 0;
    }
    person.color = colors[colorIndex];
  })

  // Create timeline segments
  timelineData.forEach(function (person, index) {
    person.segments.forEach(function (segment) {
      data.push({
        name: person.name,
        id: person.id,
        value: [index, segment.start.getTime(), segment.end.getTime(), segment.end.getTime() - segment.start.getTime()],
        itemStyle: {
          color: person.color
        }
      });
    })
  });

  function renderItem(params, api) {
    let categoryIndex = api.value(0);
    const start = api.coord([api.value(1), categoryIndex]);
    const end = api.coord([api.value(2), categoryIndex]);
    const height = api.size([0, 1])[1] * 0.6;
    let rectShape = echarts.graphic.clipRectByRect(
      {
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height
      },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      }
    );
    return (
      rectShape && {
        type: 'rect',
        transition: ['shape'],
        shape: rectShape,
        style: {
          fill: api.visual('color')
        }
      }
    );
  }
  option = {
    tooltip: {
      formatter: function (params) {
        const startDate = new Date(params.value[1]);
        const endDate = new Date(params.value[2]);
        return `${params.marker}${params.data.name} (${params.data.id}): ${dateFormat.format(startDate)} - ${dateFormat.format(endDate)}`;
      }
    },
    dataZoom: [
      {
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: 0,
        labelFormatter: ''
      },
      {
        type: 'inside',
        filterMode: 'weakFilter'
      }
    ],
    grid: {
      height: perPersonPixelsHeight * timelineData.length
    },
    xAxis: {
      min: startTime,
      scale: true,
      axisLabel: {
        formatter: function (val) {
          return dateFormat.format(new Date(val));
        }
      }
    },
    yAxis: {
      data: timelineData.map(p => p.name)
    },
    series: [
      {
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
          opacity: 0.8
        },
        encode: {
          x: [1, 2],
          y: 0
        },
        data: data
      }
    ]
  };

  option && myChart.setOption(option);
}
