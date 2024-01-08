import React, { PureComponent } from 'react';

// import { connect } from "../utils/connect";
import { connect } from 'react-redux';

import {
  incAction,
  addAction,
  changeBannersAction,
  changeRecommendsAction
 } from '../store/actionCreators'

import axios from 'axios';

class Home extends PureComponent {

  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      // console.log(res);
      const data = res.data.data;
      console.log("轮播图", data.banner.list);      
      console.log("推荐", data.recommend.list);
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>1</button>
        <button onClick={e => this.props.addNumber(5)}>5</button>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  }
};

const mapDispachToProps = dispatch => {
  return {
    increment: function() {
      dispatch(incAction());
    },
    addNumber: function(num){
      dispatch(addAction(num));
    }, 
    changeBanners(banners) {
      dispatch(changeBannersAction(banners));
    },
    changeRecommends(recommends) {
      dispatch(changeRecommendsAction(recommends));
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Home);