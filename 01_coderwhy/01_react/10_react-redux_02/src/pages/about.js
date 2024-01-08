import React, { PureComponent } from 'react';

export default class About extends PureComponent {
  render() {
    return (
      <div>
        <hr></hr>
        <h1>About</h1>
        <h2>当前计数：{0}</h2>
        <button>-1</button>
        <button>-5</button>
      </div>
    )
  }
}
