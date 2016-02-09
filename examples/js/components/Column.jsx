import React, {Component, PropTypes} from 'react'
import {Card, CardTitle, Paper} from 'material-ui'
import {DefaultColumnChart} from 'safe-framework'

const columns = [
  {title: 'Dessert', data: 'dessert'},
  {title: 'Calories', data: 'calories'}
]

const columnDrilldown = {
  series: [{
    name: 'Microsoft Internet Explorer',
    id: 'Microsoft Internet Explorer',
    data: [
      [
        'v11.0',
        24.13
      ],
      [
        'v8.0',
        17.2
      ],
      [
        'v9.0',
        8.11
      ],
      [
        'v10.0',
        5.33
      ],
      [
        'v6.0',
        1.06
      ],
      [
        'v7.0',
        0.5
      ]
    ]
  }, {
    name: 'Chrome',
    id: 'Chrome',
    data: [
      [
        'v40.0',
        5
      ],
      [
        'v41.0',
        4.32
      ],
      [
        'v42.0',
        3.68
      ],
      [
        'v39.0',
        2.96
      ],
      [
        'v36.0',
        2.53
      ],
      [
        'v43.0',
        1.45
      ],
      [
        'v31.0',
        1.24
      ],
      [
        'v35.0',
        0.85
      ],
      [
        'v38.0',
        0.6
      ],
      [
        'v32.0',
        0.55
      ],
      [
        'v37.0',
        0.38
      ],
      [
        'v33.0',
        0.19
      ],
      [
        'v34.0',
        0.14
      ],
      [
        'v30.0',
        0.14
      ]
    ]
  }, {
    name: 'Firefox',
    id: 'Firefox',
    data: [
      [
        'v35',
        2.76
      ],
      [
        'v36',
        2.32
      ],
      [
        'v37',
        2.31
      ],
      [
        'v34',
        1.27
      ],
      [
        'v38',
        1.02
      ],
      [
        'v31',
        0.33
      ],
      [
        'v33',
        0.22
      ],
      [
        'v32',
        0.15
      ]
    ]
  }, {
    name: 'Safari',
    id: 'Safari',
    data: [
      [
        'v8.0',
        2.56
      ],
      [
        'v7.1',
        0.77
      ],
      [
        'v5.1',
        0.42
      ],
      [
        'v5.0',
        0.3
      ],
      [
        'v6.1',
        0.29
      ],
      [
        'v7.0',
        0.26
      ],
      [
        'v6.2',
        0.17
      ]
    ]
  }, {
    name: 'Opera',
    id: 'Opera',
    data: [
      [
        'v12.x',
        0.34
      ],
      [
        'v28',
        0.24
      ],
      [
        'v27',
        0.17
      ],
      [
        'v29',
        0.16
      ]
    ]
  }]
}

const columnSeries = [{
  name: 'Brands',
  colorByPoint: true,
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
}]

const data = [
  {dessert: 'Cupcake', calories: 305},
  {dessert: 'Cake', calories: 405},
  {dessert: 'Nerds', calories: 505}
]

class Column extends Component {
    render () {
       return (
         <Paper zDepth={1}>
           <Card>
             <CardTitle 
               title="Column + Table" 
               subtitle="Tab Layout" 
             />
             <DefaultColumnChart
               columns={columns}
               data={data}
               drilldown={columnDrilldown}
               series={columnSeries}
               size={'col-xs-12 col-sm-12'}
               title={'Default Column Chart'}
             />
           </Card>  
         </Paper>
    )}
}

export default (Column)