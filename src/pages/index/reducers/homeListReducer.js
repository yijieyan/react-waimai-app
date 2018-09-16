import { HOME_LIST } from '../actions/actionTypes';

let defaultState = {
  list:[]
};

let homeListReducer = (state = defaultState, action) => {
  if (action.type === HOME_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    if (action.obj.page == 1) {
      newState.list = action.obj.list;
    } else {
      newState.list = newState.list.concat(action.obj.list);
    }
    return newState;
  } else {
    return state;
  }
}

export default homeListReducer;