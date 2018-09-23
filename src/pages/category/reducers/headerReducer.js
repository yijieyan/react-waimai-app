import { GET_TAB ,CHANGE_TAB} from '../actions/actionTypes';

let defaultState = {
  tabs: [
    {
      key: 'name',
      text: '美团超市'
    },
    {
      key: 'sort',
      text: '综合排序'
    },
    {
      key: 'filter',
      text: '筛选'
    }
  ],
  active: 'name'
};


const getTabReducer = (state = defaultState, action) => {
 
  if (action.type === GET_TAB) {
    let newState = JSON.parse(JSON.stringify(state));
    return newState;
  } else if (action.type === CHANGE_TAB) {
    let newState = JSON.parse(JSON.stringify(state));
    if (action.obj.active === state.active) {
      newState.active = '';
    } else {
      newState.active = action.obj.active;
    }  
    return newState;
  } else {
    return state;
  }
}
export default getTabReducer;