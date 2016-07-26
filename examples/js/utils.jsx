import changeCase from 'change-case'
import Download from 'material-ui/svg-icons/file/file-download'
import React from 'react'

export const saveCanvasFromVisualization = (metadata, visualization) => {
  const {_chart} = visualization._component
  const {name} = metadata

  saveCanvas(
    _chart.getChartCanvas(),
    changeCase.pascalCase(name) + '.png'
  )
}

export const saveCanvas = (canvas, name) => {
  const image = canvas.toDataURL()
  const aLink = document.createElement('a')
  const evt = document.createEvent('HTMLEvents')

  evt.initEvent('click')
  aLink.download = `${changeCase.pascalCase(name)}.png`
  aLink.href = image
  aLink.dispatchEvent(evt)
}

export const exportTableToCSV = (metadata, visualization) => {
  visualization._component._table.exportToCSV()
}

export const menuItemDefs = {
  Chart: [{
    key: 'saveChart',
    leftIcon: <Download />,
    primaryText: 'Save',
    onTouchTap: saveCanvasFromVisualization
  }],
  Map: [],
  Table: [{
    key: 'exportTable',
    leftIcon: <Download />,
    primaryText: 'Export',
    onTouchTap: exportTableToCSV
  }]
}