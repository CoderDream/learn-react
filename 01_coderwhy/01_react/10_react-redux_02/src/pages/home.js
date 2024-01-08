import React, { PureComponent } from 'react';

// import store from '../store'

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{0}</h2>
        <button>1</button>
        <button>5</button>
      </div>
    )
  }
}
