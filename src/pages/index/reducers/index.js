import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import navBarReducer from './navBarReducer';
import bannerReducer from './bannerReducer';

let reducer = combineReducers({
  tabReducer,
  navBarReducer,
  bannerReducer
});

export default reducer;