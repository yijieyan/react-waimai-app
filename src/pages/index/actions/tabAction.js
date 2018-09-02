import { ADD_TODO } from './actionTypes';

export const addTodo = (num) => {
  return {
    type: ADD_TODO,
    num: num
  }
};
