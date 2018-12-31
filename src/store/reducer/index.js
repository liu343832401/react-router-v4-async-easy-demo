/**
 * @description:
 *
 * @author: nick
 *
 * @create: 2018-12-19 15:14
 **/
import { combineReducers } from 'redux'
import * as ActionTypes from '../actions/ActionTypes'

const updateState = (oldObject, newValues) => {
  return Object.assign({}, oldObject, newValues)
}

function $path (state = {currentPath : null}, action) {
  switch (action.type) {
    case ActionTypes.CURRENT_PATH_TYPES:
      return updateState(state, action.data)
    default:
      return state
  }
}

export default combineReducers({
  $path
})
