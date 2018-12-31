import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
/**
 * Create Async Route Class
 * @param props
 * @returns {*}
 * @constructor
 * @author nick
 */
class CreateAsyncRouteComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loadedComponent: null,
      component: props.component,
      path: props.path,
      exact: props.exact,
      loaded: false
    }
  }

  validPath () {
    let currentPath = this.props.$path.currentPath
    if(!currentPath) return false
    // XXX currentPath.startsWith(this.state.path) maybe have bug with some path
    return currentPath.startsWith(this.state.path) || this.state.path ===
      currentPath
  }

  loadComponent () {
    let { component } = this.state
    component().then(
        comp => (this.setState((prevState, props) => ({
          loadedComponent: comp.default,
          loaded: true
        }))))
  }

  componentDidMount () {
    if (this.validPath() && !this.state.loaded) {
      this.loadComponent()
    }
  }

  //XXX warning: update All render routes
  componentDidUpdate () {
    if (this.validPath() && !this.state.loaded) {
      this.loadComponent()
    }
  }
  // FIXME
  /*  shouldComponentUpdate (props) {
   if (this.validPath(props.$path.currentPath) && !this.state.loaded) {
   return true
   }
   return false
   }*/

  render () {
    const { loadedComponent: Component, path, exact, loaded } = this.state
    const { routes } = this.props
    //render component by current path
    if (loaded && this.validPath()) {
      return (<Route path={ path } exact={ exact }
      render={ props => {
        return (<Component routes={ routes } path={ path }/>)
      } }/>)
    } else {
      return (<Route path={ path } exact={ exact }/>)
    }
  }
}

export const AndChildAsyncRoute = (props) => {
  let { routes, path } = props
  return (
    <>
      { routes.map((route, i) => (
        <AsyncRoute key={ i } { ...route } />
      )) }
      <Route
        path={ path }
        exact
        render={ () => {
          return <Redirect to={ routes[0].path }/>
        } }
      />
    </>
  )
}

const AsyncRoute = withRouter(connect((state) => {
  return { $path: state.$path }
})((props) => (<CreateAsyncRouteComponent { ...props }/>)))

export default AsyncRoute