import { NAV_BAR } from '../actions/actionTypes';


const defaultState = {
  address: '深圳市',
  content:'鸡排'
}
const navBarReducer = (state = defaultState, action) => {
  if (action.type === NAV_BAR) {
    let newState = JSON.parse(JSON.stringify(state));
    if ('address' in action.obj) {
      newState.obj.address = action.obj.address;
    }

    if ('content' in action.obj) {
      newState.obj.search = action.obj.content;
    }

    return newState;
  } else {
    return state;
  }
}
export default navBarReducer ;