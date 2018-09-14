import './index.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTab } from '../actions/tabAction';

/**
 * name: BottomBar
 * desction 主页底部栏
 */
class BottomBar extends Component {
  constructor(props) {
    super(props)
  }

  /**
   * 
   * @param {底部tabBar}  
   */
  changeTab (item) {
    this.props.dispatch(changeTab({activeTab: item.key}));
  }




  /**
   * 根据redux中的数据生成底部tarBar
   */
   createBottom () {
    let arr = this.props.tabs;
    return arr.map(item => {
      let iconCls = `bottom-icon ${item.key}`;
      let textCls = `bottom-text`
      if (item.key === this.props.activeTab) {
        iconCls += ' active';
        textCls += ' active';
      }
      return (
        <li key={item.name} className="bottom-item" onClick={()=>{this.changeTab(item)}}>
          <div className={iconCls}></div>
          <div className={textCls}>{item.name}</div>
        </li>
      )
    })
  }

  render () {
    return (
      <ul className="bottom-bar">
       {this.createBottom()}
      </ul>
    )
  }
}


BottomBar.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.string,
  dispatch: PropTypes.func
}
export default connect((state) => ({
  tabs: state.tabReducer.tabs,
  activeTab: state.tabReducer.activeTab
}))(BottomBar);