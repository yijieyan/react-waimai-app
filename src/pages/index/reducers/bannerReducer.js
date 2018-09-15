import { BANNER } from '../actions/actionTypes';

let defaultState = {
  banners: []
}
const bannerReducer = (state = defaultState, action) => {
  if (action.type === BANNER) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.banners = action.obj.banners;
    return newState;
  } else {
    return state;
  }
};

export default bannerReducer;