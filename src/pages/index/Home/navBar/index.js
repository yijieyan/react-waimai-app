import React , { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';


/**
 * 首页的顶部烂
 */
class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  /**
   * 生成顶部的定位地址
   */
  createLocation () {
    let address = this.props.address;
    let location = <span className="location">
      <i className="location-marker iconfont icon-search"></i>
      <span className="location-address">{address}</span>
      <i className="location-arrow iconfont icon-location"></i>
    </span>;
   return location;
  }

  /**
   * 生成input搜索框
   */
  createSearchInput () {
    let content = this.props.content;
    let search = <span className="search">
      <i className="search-icon iconfont icon-search"></i>
      <span className="search-text">{content}</span>
    </span>
    return search;
  }

  render () {
    return (
      <div className="navBar">
        <img src={require('../navBar/imgs/banner.jpg')} className="banner"/>
        <header className="navBar-header">
          {this.createLocation()}
          {this.createSearchInput()}
        </header>
      </div>
    )
  }
}


NavBar.propTypes = {
  address: PropTypes.string,
  content: PropTypes.string
}
export default connect((state) => ({
  address: state.navBarReducer.address,
  content: state.navBarReducer.content
}))(NavBar);