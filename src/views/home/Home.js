import React from 'react'
import { Icon, NavBar } from 'antd-mobile'
import { withRouter } from 'react-router'
import { AndChildAsyncRoute } from '../../lib'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      selected: null
    }
  }

  render () {
    const { history } = this.props
    return (
      <div className="container">
        <NavBar mode="light"
                icon={ <Icon type="left"/> }
                onLeftClick={ () => history.goBack() }
        >
          Home Page
        </NavBar>
        <div style={ { position: 'relative', height: '100%' } }>
          { AndChildAsyncRoute(this.props)}
        </div>
        { /*<div className="fixed-bottom">底部固定条</div>*/ }
      </div>
    )
  }
}

/**
 *
 */
export default withRouter(Home)
