import React, {Component, PropTypes} from 'react'
import 'chart.js'

/* global Chart */

Chart.defaults.global.defaultFontFamily = 'Roboto'

export default (ChartElement) => class ChartComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    drilldown: PropTypes.object,
    options: PropTypes.object,
    title: PropTypes.string
  }

  static defaultProps = {
    drilldown: {},
    options: {},
    title: null
  }

  baseConfig = {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      fontSize: 18,
      text: 'Default Chart'
    }
  }
  
  parseObjectsFromData (data, scales) {
    const {
      data: dataset,
      datasets,
      xAxis,
      yAxis
    } = data

    if (datasets && datasets.length > 0) {
      data.datasets = data.datasets.map((dataset) => ({
        ...dataset
      }))

      return data
    }

    const isArrayOfArrays = dataset.length > 0 && Array.isArray(dataset[0])
    const [firstXAxis = {}] = xAxis

    data.datasets = []
    data.labels = data.labels || []

    // Create the set of labels from the first dataset
    // to conform to the chartjs framework.
    for (const dataObject of dataset) {
      data.labels.push(dataObject[firstXAxis.dataProperty])
    }

    // Go through both the x and y axis properties and
    // translate it into datasets to conform with chartjs.
    for (let dataset of xAxis) {
      dataset = {
        ...dataset,
        data: [],
        xAxisID: dataset.xAxisID || dataset.axisId
      }

      if (dataset.id != null) {
        data.datasets.push(dataset)
      }
    }

    for (let dataset of yAxis) {
      dataset = {
        ...dataset,
        data: [],
        yAxisID: dataset.yAxisID || dataset.axisId
      }

      data.datasets.push(dataset)
    }

    // After creating all the datasets, populate with data.
    for (const dataObject of dataset) {
      for (let [index, dataset] of data.datasets.entries()) {
        // If data is in array format, add to corresponding
        // dataset in order of x-axes first then y-axes.
        if (isArrayOfArrays) {
          dataset.data.push(dataObject[index])

          continue
        }

        dataset.data.push(dataObject[dataset.dataProperty])
      }
    }

    return data
  }
  
  render () {
    const {data, drilldown, options, title} = this.props
    
    this.baseConfig.title = {
      ...this.baseConfig.title,
      text: title
    }
    
    const combinedOptions = {
      ...this.baseConfig,
      ...options
    }

    const parsedData = this.parseObjectsFromData({...data}, options.scales)

    return (
      <ChartElement
        data={parsedData}
        drilldown={drilldown}
        options={combinedOptions}
      />
    )
  }
  
}