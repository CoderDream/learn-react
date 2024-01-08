import axios from 'axios';

import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS
} from './constants.js';

// export function addAction(num) {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }

// export const addAction = (num) => {
//   return {
//     type: "ADD_NUMBER",
//     num
//   }
// }

export const addAction = num => ({
  type: ADD_NUMBER,
  num
});

export const subAction = num => ({
  type: SUB_NUMBER,
  num
});

export const incAction = () => ({
  type: INCREMENT
});

export const decAction = () => ({
  type: DECREMENT
});

// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
});

export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends
});


// redux-thunk中定义的action函数 getState可以存放分页数据
export const getHomeMultiDataAction = (dispatch, getState) => {
  console.log("action函数中", dispatch, getState);
  axios({
    url: "http://123.207.32.32:8000/home/multidata"
  }).then(res => {
    // console.log(res);
    const data = res.data.data;
    // console.log("轮播图", data.banner.list);      
    // console.log("推荐", data.recommend.list);
    // this.props.changeBanners(data.banner.list);
    // this.props.changeRecommends(data.recommend.list);
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendsAction(data.recommend.list));
  });
}

