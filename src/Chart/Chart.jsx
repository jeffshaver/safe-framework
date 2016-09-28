/* global Chart */
import 'chart.js'
import 'Chart.Zoom.drag.js'
import changeCase from 'change-case'
import chroma from 'chroma-js'
import {RaisedButton} from 'material-ui'
import React, {Component, PropTypes} from 'react'

Chart.defaults.global.defaultFontFamily = 'Roboto'

const defaultColorScale = [
  '#5da5da',
  '#faa43a',
  '#60bd68',
  '#f17cb0',
  '#b276b2',
  '#decf3f',
  '#f15854',
  '#4d4d4d',
  '#b2912f'
]

const style = {
  container: {
    position: 'relative',
    height: '100%'
  },
  drillDownButton: {
    position: 'absolute',
    right: '24px',
    top: '18px',
    width: '64px'
  },
  resetButton: {
    position: 'absolute',
    left: '64px',
    top: '18px',
    width: '124px'
  }
}

export default (ChartElement) => class ChartComponent extends Component {
  static propTypes = {
    backgroundColorAlpha: PropTypes.number,
    colorPalette: PropTypes.func,
    colorScale: PropTypes.string,
    containerStyle: PropTypes.object,
    data: PropTypes.object.isRequired,
    drilldown: PropTypes.bool,
    options: PropTypes.object,
    style: PropTypes.object,
    title: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    backgroundColorAlpha: 0.4,
    colorPalette: (numDataSets, scale) => {
      return chroma.scale(scale)
        .colors(Math.max(numDataSets, 2))
    },
    colorScale: defaultColorScale,
    containerStyle: {},
    drilldown: false,
    options: {},
    style: {},
    title: null,
    onClick: null,
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

  constructor (props) {
    super(props)

    const {data, options} = this.props
    const parsedData = this.parseObjectsFromData({...data}, options.scales)

    this.state = {
      inDrillDown: false,
      inZoom: false,
      data: parsedData
    }

    this.onClick = ::this.onClick
    this.onMouseMove = ::this.onMouseMove
  }

  componentWillReceiveProps (nextProps) {
    const {data: newData = {}, options} = nextProps
    const {data = {}} = this.props

    if (data.data === newData.data) {
      return
    }

    this.setState({
      data: this.parseObjectsFromData({...newData}, options.scales)
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    const {data: newData = {}} = nextProps
    const {data = {}} = this.props
    const {data: stateData = {}, inZoom} = this.state
    const {data: newStateData = {}, nextInZoom} = nextState

    return data.data !== newData.data ||
      stateData.data !== newStateData.data ||
      inZoom !== nextInZoom
  }

  redraw = () => {
    const chart = this.getChart()

    if (!chart.resize) return

    chart.resize()
  }

  getChart () {
    const {chart} = this.refs
    const {chart: internalChart} = chart.refs

    return internalChart ? internalChart.getChart() : {}
  }

  getChartData () {
    return this.getChart().data
  }

  getChartCanvas () {
    const chart = this.getChart()
    const {chart: canvasChart = {}} = chart

    return canvasChart.canvas
  }

  onClick (event) {
    const {onClick: onClickFn} = this.props
    const {inDrillDown} = this.state

    if (inDrillDown || !onClickFn) {
      return
    }

    const chart = this.getChart()
    const [clickedElement] = chart.getElementAtEvent(event) || []

    if (clickedElement) {
      const {data, datasets, ySeriesField} = chart.data
      const {_datasetIndex: datasetIndex, _index: index} = clickedElement
      const canvas = this.getChartCanvas()

      if (data) {
        const dataItem = data[index]
        const series = dataItem[ySeriesField] || []

        onClickFn(dataItem, series[datasetIndex], series, datasetIndex)
      } else {
        const dataset = datasets[datasetIndex]

        onClickFn(dataset.data[index], dataset)
      }

      // Reset the cursor after clicking.
      canvas.style.cursor = null
    }
  }

  drilldown (newData) {
    this.getChart().data.datasets = []

    this.setState({
      data: this.parseObjectsFromData({...newData}),
      inDrillDown: true
    })
  }

  onZoom () {
    this.setState({
      inZoom: true
    })
  }

  resetZoom () {
    this.getChart().resetZoom()
    
    this.setState({
      inZoom: false
    })
  }

  returnFromDrilldown () {
    const {data} = this.props

    this.getChart().data.datasets = []

    this.setState({
      data: this.parseObjectsFromData({...data}),
      inDrillDown: false
    })
  }

  onMouseMove (event) {
    const {drilldown} = this.props
    const {inDrillDown} = this.state

    if (!drilldown || inDrillDown) {
      return
    }

    const chart = this.getChart()
    const [clickedElement] = chart.getElementAtEvent(event) || []
    const canvas = this.getChartCanvas()

    if (clickedElement) {
      canvas.style.cursor = 'pointer'
    } else {
      canvas.style.cursor = null
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
      const datasetYSeries = dataObject[ySeriesField]

      // If ySeriesField was not found in the data and
      // no datasets were provided, create a datset.
      if (ySeriesField && !datasetYSeries && data.datasets.length === 0) {
        data.datasets.push({
          data: [],
          dataProperty: ySeriesFieldValue,
          label: changeCase.titleCase(ySeriesFieldName)
        })
      }

      // Create the set of labels from the first dataset
      // to conform to the chartjs framework.
      data.labels.push(dataObject[firstXAxis.dataProperty])

      for (const [index, dataset] of data.datasets.entries()) {
        // If data is in array format, add to corresponding
        // dataset in order of x-axes first then y-axes.
        if (isArrayOfArrays) {
          dataset.data.push(dataObject[index])

          continue
        }

        dataset.data.push(dataObject[dataset.dataProperty])
      }

      // If the ySeriesField was provided, we want to traverse
      // through each of these fields and construct a new series from that
      // field if needed.
      if (Array.isArray(datasetYSeries)) {
        for (const newSeries of datasetYSeries) {
          this.createNewYSeries(
            ySeriesMap, newSeries[ySeriesFieldName], newSeries[ySeriesFieldValue], dataIndex)
        }
      } else if (typeof datasetYSeries === 'object') {
        const dataKeys = Object.keys(datasetYSeries)

        for (const seriesName of dataKeys) {
          this.createNewYSeries(
            ySeriesMap, seriesName, datasetYSeries[seriesName], dataIndex)
        }

        // Fill in any fields that were no present in the
        // object, but need empty values for its dataset.
        ySeriesMap.forEach((value, key) => {
          if (datasetYSeries[key] === undefined) {
            this.createNewYSeries(
              ySeriesMap, key, null, dataIndex)
          }
        })
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
        label: changeCase.titleCase(seriesName),
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
      colorPalette,
      colorScale,
      containerStyle,
      options,
      style: canvasStyle,
      title
    } = this.props
    const {inDrillDown, inZoom, data} = this.state

    if (title) {
      this.baseConfig.title = {
        ...this.baseConfig.title,
        display: true,
        text: title
      }
    }

    const combinedOptions = {
      ...this.baseConfig,
      ...options,
      zoom: {
        ...options.zoom,
        onZoom: ::this.onZoom
      }
    }

    return (
      <div style={{...style.container, ...containerStyle}}>
        <ChartElement
          colorPalette={colorPalette}
          colorScale={colorScale}
          data={data}
          options={combinedOptions}
          ref='chart'
          style={canvasStyle}
          onClick={this.onClick}
          onMouseMove={this.onMouseMove}
        />
        <RaisedButton
          label='Return'
          primary={true}
          style={{
            ...style.drillDownButton,
            display: inDrillDown ? 'block' : 'none'
          }}
          onMouseUp={::this.returnFromDrilldown}
        />
        <RaisedButton
          label='Reset Zoom'
          primary={true}
          style={{
            ...style.resetButton,
            display: inZoom ? 'block' : 'none'
          }}
          onMouseUp={::this.resetZoom}
        />
      </div>
    )
  }
}