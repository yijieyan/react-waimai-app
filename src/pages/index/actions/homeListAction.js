import { HOME_LIST } from './actionTypes';
import http from '../../../APIService/http';


let getHomeList = (obj) => ({
  type: HOME_LIST,
  obj
})
export const  getHomeListData = (page = 1) => {
  return async (dispatch) => {
    let res = await http.get(`/api/getHomeList`, {
      page,
      size: 10
    });
    if (res.code === 0) {
      dispatch(getHomeList({list:res.data, page}));
    }
  }
}