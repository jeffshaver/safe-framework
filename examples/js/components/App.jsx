import ActionAssessment from 'material-ui/svg-icons/action/assessment'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Drawer from 'material-ui/Drawer'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import ListItem from 'material-ui/List/ListItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {pascalToSnakeCase} from '../utils'
import {Wrapper} from './Wrapper'
import Radium, {Style, StyleRoot} from 'radium'
import React, {Component, PropTypes} from 'react'

const style = {
  appBar: {
    paddingLeft: '272px'
  }
}

const visualizations = [
  'Area',
  'Bar',
  'BasicTable',
  'Column',
  'Line',
  'Map',
  'Pie',
  'Scatter',
  'Table'
]

const components = [
  'FileInput'
]

@Radium
class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const {children} = this.props

    return (
      <StyleRoot>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <Style rules={{
              body: {
                fontFamily: 'Roboto, sans-serif'
              },
              'body *': {
                fontFamily: 'inherit'
              }
            }}/>
            <AppBar
              showMenuIconButton={false}
              style={style.appBar}
              title='SAFE - Framework'
              zDepth={1}
            />
            <Drawer
              ref='leftNav'
            >
              <ListItem
                initiallyOpen = {true}
                key={0}
                leftAvatar={
                  <Avatar
                    icon={<ActionAssessment />}
                  />
                }
                nestedItems={
                  visualizations.map((visualization, i) => (
                    <ListItem
                      key={i}
                      leftAvatar={<Avatar>{visualization[0]}</Avatar>}
                      primaryText={visualization}
                      onTouchTap={() => (window.location = `#/components/${pascalToSnakeCase(visualization)}`)}
                    />
                  ))
                }
                primaryText='Visualizations'
              />
              <ListItem
                initiallyOpen = {true}
                key={1}
                leftAvatar={
                  <Avatar
                    icon={<ActionAssessment />}
                  />
                }
                nestedItems={
                  components.map((component, i) => (
                    <ListItem
                      key={i}
                      leftAvatar={<Avatar>{component[0]}</Avatar>}
                      primaryText={component}
                      onTouchTap={() => (window.location = `#/components/${pascalToSnakeCase(component)}`)}
                    />
                  ))
                }
                primaryText='Components'
              />
            </Drawer>
            <Wrapper>
              {children}
            </Wrapper>
          </div>
        </MuiThemeProvider>
      </StyleRoot>
    )
  }
}

export default App