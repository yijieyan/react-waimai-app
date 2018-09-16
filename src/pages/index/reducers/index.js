import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import navBarReducer from './navBarReducer';
import bannerReducer from './bannerReducer';
import homeListReducer from './homeListReducer';

let reducer = combineReducers({
  tabReducer,
  navBarReducer,
  bannerReducer,
  homeListReducer
});

export default reducer;