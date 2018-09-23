
import { GET_TAB, CHANGE_TAB } from './actionTypes';
export const getTabs = () => {
  return {
    type: GET_TAB
  }
}

export const changeTabs = (obj) => {
  return {
    type: CHANGE_TAB,
    obj
  }
}
