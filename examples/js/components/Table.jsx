import React, {Component} from 'react'
import {Card, CardActions, CardTitle, Dialog, Paper} from 'material-ui'
import {DataTable} from 'safe-framework'
import FlatButton from 'material-ui/FlatButton'
import {tableData} from '../fixtures'

class Table extends Component {
  constructor (props) {
    super(props)

    this.state = {
      copiedText: '',
      open: false
    }
  }
  
  handleGetCSV () {
    this.setState({
      copiedText: this.dataTable.getCSV(),
      open: true
    })
  }
  
  handleExport () {
    this.dataTable.exportToCSV()
  }

  handleClose = () => {
    this.setState({open: false})
  };
  
  render () {
    const {copiedText = '', open} = this.state
    const actions = [
      <FlatButton
        key='button1'
        label='Close'
        primary={true}
        onTouchTap={this.handleClose}
      />
    ]
    
    return (
      <Paper zDepth={1}>
        <Card>
          <CardTitle
            title='Table'
          />
          <CardActions>
            <FlatButton label='Export To CSV'
              onTouchTap={::this.handleExport}/>
            <FlatButton label='Get CSV'
              onTouchTap={::this.handleGetCSV}/>
          </CardActions>
          <DataTable
            checkboxColumn={true}
            childProp='children'
            data={tableData}
            enableColResize='true'
            enableSorting='true'
            ref={(ref) => (this.dataTable = ref)}
          />
        </Card>
        <Card>
          <Dialog
            actions={actions}
            autoScrollBodyContent={true}
            modal={false}
            open={open}
            title='Retrieved Text'
            onRequestClose={this.handleClose}
          >
            <div>
              {copiedText}
            </div>
        </Dialog>
        </Card>
      </Paper>
    )
  }
}

export default Table