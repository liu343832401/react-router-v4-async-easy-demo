/**
 * @description:
 *
 * @author: nick
 *
 * @create: 2018-12-27 11:28
 **/
import { CURRENT_PATH_TYPES } from '../ActionTypes'
export const setCurrentPath = (path) => {
  return {
    type: CURRENT_PATH_TYPES,
    data: { currentPath: path }
  }
}
