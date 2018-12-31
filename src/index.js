/**
 * @description:
 *
 * @author: nick
 *
 * @create: 2018-12-30 15:30
 **/
import React from 'react'
import { render } from 'react-dom'
import { createHashHistory } from 'history'
import { store } from './store'
import AsyncRoute from './lib'
import routes from './routers'
import { Router, Redirect, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as Actions from './store/actions'
import './index.css'
const updateCurrentPath = (path) => {
  store.dispatch(Actions.RouteActions.setCurrentPath(path))
}
const history = createHashHistory()
history.listen((location, action) => {
  // update store state
  updateCurrentPath(location.pathname)
})
updateCurrentPath(history.location.pathname)
render(
  <Provider store={ store }>
        <Router history={history}>
          <>
            <Route path="/" exact render={ () => {return <Redirect to={ '/home' }/>} }/>
            {
              routes.map((route, i) => (
                <AsyncRoute key={ 'route-' + i } { ...route }/>
              ))
            }
          </>
        </Router>
  </Provider>
  , document.getElementById('app'))