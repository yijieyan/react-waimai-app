import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * name: BottomBar
 * desction 主页底部栏
 */
class BottomBar extends Component {
  constructor(props) {
    super(props)
  }

  createBottom () {
    let arr = ['首页', '外卖', '我的'];
    return arr.map(item => (
      <div key={item} className="bottom-content">
        <div className="bottom-icon"></div>
        <div className="bottom-text">{item}</div>
      </div>
    ))
  }

  render () {
    return (
      <div className="bottom-bar">
       {this.createBottom()}
      </div>
    )
  }
}

export default connect(() => ({
  
}))(BottomBar);