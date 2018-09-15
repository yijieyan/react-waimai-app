import { BANNER } from './actionTypes';
import http from '../../../APIService/http';

let commitData = (data)=> {
  return {
    type: BANNER,
    obj:{
      banners: data
    }
  }
}
export const getBannerData =  () => {
  return async (dispatch) => {
    let res = await http.get(`/api/getHomeBannerList`);
    if (res.code === 0) {
      dispatch(commitData(res.data));
    }
  }
}