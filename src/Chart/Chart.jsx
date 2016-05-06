import React, {Component, PropTypes} from 'react'
import 'chart.js'
import chroma from 'chroma-js'
import titleCase from 'title-case'

/* global Chart */

Chart.defaults.global.defaultFontFamily = 'Roboto'

export default (ChartElement) => class ChartComponent extends Component {
  static propTypes = {
    backgroundColorAlpha: PropTypes.number,
    colorPalette: PropTypes.func,
    colorScale: PropTypes.string,
    data: PropTypes.object.isRequired,
    drilldown: PropTypes.object,
    options: PropTypes.object,
    title: PropTypes.string
  }

  static defaultProps = {
    backgroundColorAlpha: 0.4,
    colorPalette: (numDataSets, scale) => {
      return chroma.scale(scale)
        .colors(Math.max(numDataSets, 2))
    },
    colorScale: 'Paired',
    drilldown: {},
    options: {},
    title: null,
    ...ChartElement.defaultProps
  }

  baseConfig = {
    legend: {
      position: 'bottom'
    },
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: false,
      fontSize: 18,
      text: 'Default Chart'
    }
  }
  
  parseObjectsFromData (data, scales) {
    const {
      data: dataset,
      datasets,
      xAxis,
      yAxis,
      ySeriesField,
      ySeriesFieldName = 'name',
      ySeriesFieldValue = 'value'
    } = data
    const ySeriesMap = new Map()

    if (datasets && datasets.length > 0) {
      data.datasets = this.populateWithColors(data.datasets)

      return data
    }

    const isArrayOfArrays = dataset.length > 0 && Array.isArray(dataset[0])

    data.datasets = []
    data.labels = data.labels || []

    let [firstXAxis = {}] = xAxis

    // Go through both the x and y axis properties and
    // translate it into datasets to conform with chartjs.
    for (let dataset of xAxis || []) {
      if (typeof dataset === 'string') {
        firstXAxis = dataset = {
          dataProperty: dataset
        }
      }
      
      dataset = {
        ...dataset,
        data: [],
        xAxisID: dataset.xAxisID || dataset.axisId
      }

      if (dataset.id != null) {
        data.datasets.push(dataset)
      }
    }

    for (let dataset of yAxis || []) {
      if (typeof dataset === 'string') {
        dataset = {
          dataProperty: dataset
        }
      }
      
      dataset = {
        ...dataset,
        data: [],
        yAxisID: dataset.yAxisID || dataset.axisId
      }

      data.datasets.push(dataset)
    }

    // After creating all the datasets, populate with data.
    for (const [dataIndex, dataObject] of dataset.entries()) {
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
      
      const datasetYSeries = dataObject[ySeriesField]
        
      // If the ySeriesField was provided, we want to traverse
      // through each of these fields and construct a new series from that
      // field if needed.
      if (Array.isArray(datasetYSeries)) {
        for (const newSeries of datasetYSeries) {
          this.createNewYSeries(
            ySeriesMap, newSeries[ySeriesFieldName], newSeries[ySeriesFieldValue], dataIndex)
        }
      } else if (typeof datasetYSeries === 'object') {
        for (const seriesName of Object.keys(datasetYSeries)) {
          this.createNewYSeries(
            ySeriesMap, seriesName, datasetYSeries[seriesName], dataIndex)
        }
      }
    }
    
    // Add each of the new Y-Series as datasets.
    ySeriesMap.forEach((ySeries, key, map) => data.datasets.push(ySeries))
    
    data.datasets = this.populateWithColors(data.datasets)

    return data
  }
  
  createNewYSeries (ySeriesMap, seriesName, seriesValue, dataIndex = 0) {
    let ySeriesDataset = ySeriesMap.get(seriesName)
          
    if (!ySeriesDataset) {
      ySeriesDataset = {
        label: titleCase(seriesName),
        data: Array(dataIndex).fill(0)
      }
      ySeriesMap.set(seriesName, ySeriesDataset)
    }
    
    ySeriesDataset.data.push(seriesValue)
    
    return ySeriesDataset
  }
  
  populateWithColors (datasets) {
    const {backgroundColorAlpha, colorPalette, colorScale} = this.props
    
    // update the colors on the datasets.
    const datasetColors = colorPalette(datasets.length, colorScale)
    
    // Make a copy of each of the datasets before passing them along
    datasets = datasets.map((dataset, index) => {
      const backgroundColor = dataset.backgroundColor ||
        chroma(datasetColors[index]).alpha(backgroundColorAlpha).css()
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
        
    if (title) {
      this.baseConfig.title = {
        ...this.baseConfig.title,
        display: true,
        text: title
      }
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