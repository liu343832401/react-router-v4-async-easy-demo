/**
 * @description: 全局state管理
 *
 * @author: nick
 *
 * @create: 2018-12-30 19:59
 **/
import { createStore } from 'redux'
import rootReducer from './reducer'
export const store = createStore(rootReducer)