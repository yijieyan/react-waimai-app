import { ADD_TODO } from '../actions/actionTypes';

let defaultState = {
  num: 0
};

let addTodoChange = (state, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.num = action.num + 1;
  return newState;
}


const tabReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_TODO:
    return addTodoChange(state, action);
    default: return state;
  }
}

export default tabReducer