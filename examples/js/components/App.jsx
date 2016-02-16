import Radium, {Style} from 'radium'
import React, {Component, PropTypes} from 'react'
import {AppBar, AppCanvas, Avatar, LeftNav, ListItem} from 'material-ui'
import {large} from '../styles/mediaQueries'
// SVG
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

@Radium
class App extends Component {
  static propTypes = {
    children: PropTypes.array
  };

  render () {
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
            nestedItems={[
              <ListItem
                key={1}
                leftAvatar={<Avatar>A</Avatar>}
                primaryText='Area'
                onTouchTap={() => (window.location = '#/components/area')}
              />,
              <ListItem
                key={2}
                leftAvatar={<Avatar>C</Avatar>}
                primaryText='Column'
                onTouchTap={() => (window.location = '#/components/column')}
              />,
              <ListItem
                key={3}
                leftAvatar={<Avatar>L</Avatar>}
                primaryText='Line'
                onTouchTap={() => (window.location = '#/components/line')}
              />,
              <ListItem
                key={4}
                leftAvatar={<Avatar>M</Avatar>}
                primaryText='Map'
                onTouchTap={() => (window.location = '#/components/map')}
              />,
              <ListItem
                key={5}
                leftAvatar={<Avatar>P</Avatar>}
                primaryText='Pie'
                onTouchTap={() => (window.location = '#/components/pie')}
              />,
              <ListItem
                key={6}
                leftAvatar={<Avatar>T</Avatar>}
                primaryText='Table'
                onTouchTap={() => (window.location = '#/components/table')}
              />
            ]}
            primaryText='Components'
          />
        </LeftNav>
        <div style={style.wrapper}>
          {this.props.children}
        </div>
      </AppCanvas>
    )
  }
}

export default App
