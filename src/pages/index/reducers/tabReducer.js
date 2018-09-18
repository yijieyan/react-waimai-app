import { TAB_ITEM , CHANGE_TAB} from '../actions/actionTypes';

let defaultState = {
  tabs: [
    {
      name: '首页',
      key: 'homeIcon'
    },
    {
      name: '订单',
      key: 'orderIcon'
    },
    {
      name: '我的',
      key: 'myIcon'
    }
  ],
  activeTab: 'orderIcon'
};



const tabReducer = (state = defaultState, action) => {
  if (action.type === TAB_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.tabs = action.obj.tabs;
    return newState;
  } else if (action.type === CHANGE_TAB) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.activeTab = action.obj.activeTab;
    return newState;
  } else {
    return state;
  }
}

export default tabReducer