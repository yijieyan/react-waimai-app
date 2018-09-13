import { TAB_ITEM, CHANGE_TAB } from './actionTypes';

export const getTabs = (obj) => {
  return {
    type: TAB_ITEM,
    obj
  }
};

export const changeTab = (obj) => {
  return {
    type: CHANGE_TAB,
    obj
  }
}
