// AREA

export const areaSeries = {
  datasets: [{
    label: 'USA',
    data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
      1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
      27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
      26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
      24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
      22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
      10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
    ]
  }, {
    label: 'USSR/Russia',
    data: [null, null, null, null, null, null, null, null, null, null,
      5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
      4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
      15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
      33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
      35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
      21000, 20000, 19000, 18000, 18000, 17000, 16000
    ]
  }]
}
const startYear = 1940

// Create the y-axis data
const dataSize = areaSeries.datasets[0].data.length

areaSeries.labels = []

for (let i = 0; i < dataSize; i++) {
  areaSeries.labels.push(startYear + i)
}

// COLUMN

export const columnDrilldown = {
  series: [{
    name: 'Microsoft Internet Explorer',
    id: 'Microsoft Internet Explorer',
    data: [
      ['v11.0', 24.13],
      ['v8.0', 17.2],
      ['v9.0', 8.11],
      ['v10.0', 5.33],
      ['v6.0', 1.06],
      ['v7.0', 0.5]
    ]
  }, {
    name: 'Chrome',
    id: 'Chrome',
    data: [
      ['v40.0', 5],
      ['v41.0', 4.32],
      ['v42.0', 3.68],
      ['v39.0', 2.96],
      ['v36.0', 2.53],
      ['v43.0', 1.45],
      ['v31.0', 1.24],
      ['v35.0', 0.85],
      ['v38.0', 0.6],
      ['v32.0', 0.55],
      ['v37.0', 0.38],
      ['v33.0', 0.19],
      ['v34.0', 0.14],
      ['v30.0', 0.14]
    ]
  }, {
    name: 'Firefox',
    id: 'Firefox',
    data: [
      ['v35', 2.76],
      ['v36', 2.32],
      ['v37', 2.31],
      ['v34', 1.27],
      ['v38', 1.02],
      ['v31', 0.33],
      ['v33', 0.22],
      ['v32', 0.15]
    ]
  }, {
    name: 'Safari',
    id: 'Safari',
    data: [
      ['v8.0', 2.56],
      ['v7.1', 0.77],
      ['v5.1', 0.42],
      ['v5.0', 0.3],
      ['v6.1', 0.29],
      ['v7.0', 0.26],
      ['v6.2', 0.17]
    ]
  }, {
    name: 'Opera',
    id: 'Opera',
    data: [
      ['v12.x', 0.34],
      ['v28', 0.24],
      ['v27', 0.17],
      ['v29', 0.16]
    ]
  }]
}

export const columnSeries = {
  label: 'Brands',
  colorByPoint: true,
  xAxis: ['name'],
  yAxis: ['y'],
  data: [{
    name: 'Microsoft Internet Explorer',
    y: 56.33,
    drilldown: 'Microsoft Internet Explorer'
  }, {
    name: 'Chrome',
    y: 24.03,
    drilldown: 'Chrome'
  }, {
    name: 'Firefox',
    y: 10.38,
    drilldown: 'Firefox'
  }, {
    name: 'Safari',
    y: 4.77,
    drilldown: 'Safari'
  }, {
    name: 'Opera',
    y: 0.91,
    drilldown: 'Opera'
  }, {
    name: 'Proprietary or Undetectable',
    y: 0.2,
    drilldown: null
  }]
}

// Gettin Series Info From Data
export const columnSeriesFromData = {
  label: 'Internet Browser Use By Gender',
  colorByPoint: true,
  xAxis: ['name'],
  ySeriesField: 'series',
  data: [{
    name: 'Microsoft Internet Explorer',
    y: 56.33,
    series: [
      {name: 'male', value: 30.33},
      {name: 'female', value: 26}
    ]
  }, {
    name: 'Chrome',
    y: 24.03,
    series: {
      male: 15,
      female: 4.03,
      someUnknown: 5
    }
  }, {
    name: 'Firefox',
    y: 10.38,
    series: {
      male: 3,
      female: 7.38
    }
  }, {
    name: 'Safari',
    y: 4.77,
    series: {
      male: 2,
      female: 1.77,
      someUnknown: 1
    }
  }, {
    name: 'Opera',
    y: 0.91,
    series: {
      male: 0,
      female: 0.91
    }
  }, {
    name: 'Proprietary or Undetectable',
    y: 0.2,
    series: {
      male: 0.1,
      female: 0.1
    }
  }]
}

// DATATABLE

export const tableColumns = [{
  headerName: 'Text',
  field: 'text'
}, {
  headerName: 'Number',
  field: 'number'
}, {
  headerName: 'Decimal',
  field: 'decimal'
}, {
  headerName: 'Date',
  field: 'date'
}, {
  headerName: 'Percent',
  field: 'percent',
  filter: 'number',
  width: 120,
  cellRenderer: customCellRenderer
}]

function customCellRenderer (params) {
  return (params.value * 100).toFixed(2) + '%'
}

export const basicTableColumns = [{
  title: 'a',
  data: 'a'
}, {
  title: 'b',
  data: 'b'
}, {
  title: 'c',
  data: 'c'
}, {
  title: 'd',
  data: 'd'
}, {
  title: 'e',
  data: 'e'
}]

export let basicTableData = []
export let tableData = []

for (let i = 0; i < 100; i++) {
  basicTableData.push({
    a: i,
    b: i,
    c: i,
    d: i,
    e: i
  })
}

for (let i = 0; i < 1000; i++) {
  tableData.push({
    text: 'Text ' + i,
    number: i,
    decimal: Math.random(1, 100),
    date: new Date(Date.now() * Math.random()),
    percent: Math.random()
  })
}

// LINE

export const lineSeries = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  datasets: [{
    label: 'Tokyo',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  }, {
    label: 'New York',
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
  }, {
    label: 'Berlin',
    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
  }, {
    label: 'London',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
}

// MAP

export const mapCenter = [39.73, -104.99]
export const mapMarkers = [{
  key: 'Littleton',
  position: [39.61, -105.02],
  children: 'This is Littleton, CO'
}, {
  key: 'Denver',
  position: [39.74, -104.99],
  children: 'This is Denver, CO'
}, {
  key: 'Aurora',
  position: [39.73, -104.81],
  children: 'This is Aurora, CO'
}, {
  key: 'Golden',
  position: [39.77, -105.23],
  children: 'This is Golden, CO'
}]
export const mapTitle = 'Cities'

// PIE

export const pieDrilldown = {
  series: [{
    name: 'Microsoft Internet Explorer',
    id: 'Microsoft Internet Explorer',
    data: [
      ['v11.0', 24.13],
      ['v8.0', 17.2],
      ['v9.0', 8.11],
      ['v10.0', 5.33],
      ['v6.0', 1.06],
      ['v7.0', 0.5]
    ]
  }, {
    name: 'Chrome',
    id: 'Chrome',
    data: [
      ['v40.0', 5],
      ['v41.0', 4.32],
      ['v42.0', 3.68],
      ['v39.0', 2.96],
      ['v36.0', 2.53],
      ['v43.0', 1.45],
      ['v31.0', 1.24],
      ['v35.0', 0.85],
      ['v38.0', 0.6],
      ['v32.0', 0.55],
      ['v37.0', 0.38],
      ['v33.0', 0.19],
      ['v34.0', 0.14],
      ['v30.0', 0.14]
    ]
  }, {
    name: 'Firefox',
    id: 'Firefox',
    data: [
      ['v35', 2.76],
      ['v36', 2.32],
      ['v37', 2.31],
      ['v34', 1.27],
      ['v38', 1.02],
      ['v31', 0.33],
      ['v33', 0.22],
      ['v32', 0.15]
    ]
  }, {
    name: 'Safari',
    id: 'Safari',
    data: [
      ['v8.0', 2.56],
      ['v7.1', 0.77],
      ['v5.1', 0.42],
      ['v5.0', 0.3],
      ['v6.1', 0.29],
      ['v7.0', 0.26],
      ['v6.2', 0.17]
    ]
  }, {
    name: 'Opera',
    id: 'Opera',
    data: [
      ['v12.x', 0.34],
      ['v28', 0.24],
      ['v27', 0.17],
      ['v29', 0.16]
    ]
  }]
}

export const pieSeries = {
  label: 'Brands',
  colorByPoint: true,
  xAxis: [{
    dataProperty: 'name'
  }],
  yAxis: [{
    dataProperty: 'y'
  }],
  data: [{
    name: 'Microsoft Internet Explorer',
    y: 56.33,
    drilldown: 'Microsoft Internet Explorer'
  }, {
    name: 'Chrome',
    y: 24.03,
    drilldown: 'Chrome'
  }, {
    name: 'Firefox',
    y: 10.38,
    drilldown: 'Firefox'
  }, {
    name: 'Safari',
    y: 4.77,
    drilldown: 'Safari'
  }, {
    name: 'Opera',
    y: 0.91,
    drilldown: 'Opera'
  }, {
    name: 'Proprietary or Undetectable',
    y: 0.2,
    drilldown: null
  }]
}

// SCATTER
function getRandomInt (min, max) {
  // Generate random number n, where min <= n <= max
  let range = max - min + 1
  return Math.floor(Math.random() * range) + min
}

let femaleData = Array.from({
  length: 500
}, () => {
  return {
    x: getRandomInt(150, 180),
    y: getRandomInt(45, 80)
  }
})
let maleData = Array.from({
  length: 500
}, () => {
  return {
    x: getRandomInt(160, 200),
    y: getRandomInt(60, 100)
  }
})

export const scatterSeries = {
  labels: [],
  datasets: [{
    label: 'Female',
    pointBackgroundColor: 'rgba(223, 83, 83, .5)',
    data: femaleData
  }, {
    label: 'Male',
    pointBackgroundColor: 'rgba(119, 152, 191, .5)',
    data: maleData
  }]
}