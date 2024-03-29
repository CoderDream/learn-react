import React, { PureComponent } from 'react';

import { connect } from "../utils/connect";

import {
  incAction,
  addAction
 } from '../store/actionCreators'

class Home extends PureComponent {

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
    counter: state.counter
  }
};

const mapDispachToProps = dispatch => {
  return {
    increment: function() {
      dispatch(incAction());
    },
    addNumber: function(num){
      dispatch(addAction(num));
    }
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Home);


