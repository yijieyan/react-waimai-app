import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.scss';


/**
 * 首页的banner,入口地址
 */
class Banner extends Component {
  constructor (props) {
    super(props)
  }
  
  createBannerLists () {
    let lists = this.props.banners;
    return lists.map(item => (
      <li key={item.img} className="banners-item">
        <img src={item.img} className="banners-img"/>
        <p className="banners-text">{item.text}</p>
      </li>
    ))
  }


  render () {
    return (
     <ul className="banners">
       {this.createBannerLists()}
       <div className="clearfix"></div>
     </ul>
    )
  }
} 

Banner.propTypes = {
  banners: PropTypes.array
}
export default connect(() => ({
  
}))(Banner);