import Radium, {Style} from 'radium'
import React, {Component, PropTypes} from 'react'
import {AppBar, AppCanvas, Avatar, LeftNav, List, ListItem} from 'material-ui'
import {DefaultAreaChart, DefaultColumnChart, DefaultLineChart, DefaultPieChart} from 'safe-framework'
import {mediaQueries, large} from '../styles/mediaQueries'
//SVG
import ActionAssessment from 'material-ui/lib/svg-icons/action/assessment'

const style = {
  nav: {
    margin: '64px 0 0px 0',
    padding: '10px 0 0 0'
  },
  padding: '74px 0 0 0',
  wrapper: {
    padding: '64px 0 0 0',
    [large]: {
      padding: '64px 0 0 256px'
    }
  }
}

@
Radium
class App extends Component {
  render() {
    return (
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
          title = "SAFE - Framework"
          zDepth = {1}
        />
          <LeftNav
            ref='leftNav'
            style={style.nav}
          >
          <ListItem
            key={0}
            initiallyOpen = {true}
            primaryText="Components"
            leftAvatar={
              <Avatar
                icon={<ActionAssessment />}
              />
            }
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Area"
                leftAvatar={<Avatar>A</Avatar>}
                onTouchTap={() => window.location = '#/components/area'}
              />,
                <ListItem
                key={2}
                primaryText="Column"
                leftAvatar={<Avatar>C</Avatar>}
                onTouchTap={() => window.location = '#/components/column'}
              />,
              <ListItem
                key={3}
                primaryText="Line"
                leftAvatar={<Avatar>L</Avatar>}
                onTouchTap={() => window.location = '#/components/line'}
              />,
              <ListItem
                key={4}
                primaryText="Map"
                leftAvatar={<Avatar>M</Avatar>}
                onTouchTap={() => window.location = '#/components/map'}
              />,
              <ListItem
                key={5}
                primaryText="Pie"
                leftAvatar={<Avatar>P</Avatar>}
                onTouchTap={() => window.location = '#/components/pie'}
              />,
              <ListItem
                key={6}
                primaryText="Table"
                leftAvatar={<Avatar>T</Avatar>}
                onTouchTap={() => window.location = '#/components/table'}
              />
            ]}
          />
          </LeftNav>
          <div style={style.wrapper}>
            {this.props.children}
          </div>
      </AppCanvas>
    )
  }
}

export default /* connect() */ (App)