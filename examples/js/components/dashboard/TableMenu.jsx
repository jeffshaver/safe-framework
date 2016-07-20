import Download from 'material-ui/svg-icons/file/file-download'
import MenuItem from 'material-ui/MenuItem/MenuItem'
import React, {Component, PropTypes} from 'react'

export class TableMenu extends Component {
  static propTypes = {
    visualization: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.onTouchTap = ::this.onTouchTap
  }

  onTouchTap (event) {
    const {visualization} = this.props

    visualization._component._table.exportToCSV()
  }

  render () {
    return (
      <span>
        <MenuItem
          key='exportExcel'
          leftIcon={<Download />}
          primaryText='Export'
          onTouchTap={this.onTouchTap}
        />
      </span>
    )
  }
}