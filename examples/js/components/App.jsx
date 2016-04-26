import Radium, {Style, StyleRoot} from 'radium'
import React, {Component, PropTypes} from 'react'
import {AppBar, AppCanvas, Avatar, LeftNav, ListItem} from 'material-ui'
import {Wrapper} from './Wrapper'
import {pascalToSnakeCase} from '../utils'
// SVG
import ActionAssessment from 'material-ui/lib/svg-icons/action/assessment'

/* global window */

const style = {
  nav: {
    margin: '64px 0 0px 0',
    padding: '10px 0 0 0'
  },
  padding: '74px 0 0 0'
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
        <AppCanvas>
          <Style rules={{
            body: {
              fontFamily: 'Roboto, sans-serif'
            },
            'body *': {
              fontFamily: 'inherit'
            }
          }}/>
          <AppBar
            showMenuIconButton = {false}
            title = 'SAFE - Framework'
            zDepth = {1}
          />
          <LeftNav
            ref='leftNav'
            style={style.nav}
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
          </LeftNav>
          <Wrapper>
            {children}
          </Wrapper>
        </AppCanvas>
      </StyleRoot>
    )
  }
}

export default App