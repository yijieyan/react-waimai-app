import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import navBarReducer from './navBarReducer';

let reducer = combineReducers({
  tabReducer,
  navBarReducer
});

export default reducer;