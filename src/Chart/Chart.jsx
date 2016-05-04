import React, {Component, PropTypes} from 'react'
import 'chart.js'
import chroma from 'chroma-js'

/* global Chart */

Chart.defaults.global.defaultFontFamily = 'Roboto'

export default (ChartElement) => class ChartComponent extends Component {
  static propTypes = {
    colorPalette: PropTypes.func,
    colorScale: PropTypes.string,
    data: PropTypes.object.isRequired,
    drilldown: PropTypes.object,
    options: PropTypes.object,
    title: PropTypes.string
  }

  static defaultProps = {
    colorPalette: (numDataSets, scale) => {
      return chroma.scale(scale)
        .colors(Math.max(numDataSets, 2))
    },
    colorScale: 'RdYlBu',
    drilldown: {},
    options: {},
    title: null
  }

  baseConfig = {
    legend: {
      position: 'bottom'
    },
    maintainAspectRatio: false,
    responsive: true,
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
      data.datasets = this.populateWithColors(data.datasets)

      return data
    }

    const isArrayOfArrays = dataset.length > 0 && Array.isArray(dataset[0])
    const [firstXAxis = {}] = xAxis

    data.datasets = []
    data.labels = data.labels || []

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
      // Create the set of labels from the first dataset
      // to conform to the chartjs framework.
      data.labels.push(dataObject[firstXAxis.dataProperty])
      
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
    
    data.datasets = this.populateWithColors(data.datasets)

    return data
  }
  
  populateWithColors (datasets) {
    const {colorPalette, colorScale} = this.props
    
    // update the colors on the datasets.
    const datasetColors = colorPalette(datasets.length, colorScale)
    
    // Make a copy of each of the datasets before passing them along
    datasets = datasets.map((dataset, index) => {
      const backgroundColor = dataset.backgroundColor ||
        chroma(datasetColors[index]).alpha(0.4).css()
      const borderColor = dataset.borderColor || datasetColors[index]
      
      return {
        ...dataset,
        backgroundColor,
        borderColor
      }
    })
    
    return datasets
  }
  
  render () {
    const {
      colorPalette, colorScale, data, drilldown, options, title
    } = this.props
        
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
        colorPalette={colorPalette}
        colorScale={colorScale}
        data={parsedData}
        drilldown={drilldown}
        options={combinedOptions}
      />
    )
  }
  
}