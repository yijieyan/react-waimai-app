import React , { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './navBar/index';
import Banner from './banner/index';
import List from './list/index';

import { getBannerData } from '../actions/bannerAction';
import { getHomeListData } from '../actions/homeListAction';

/**
 * 首页
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getBannerData());
    this.props.dispatch(getHomeListData());
  }
  
  render () {
    let banners = this.props.banners;
    let list = this.props.list;
    return (
      <Fragment>
        <NavBar/>
        <Banner banners={banners}/>
        <List list={list}/>
      </Fragment>
    )
  }
}


Home.propTypes = {
  dispatch: PropTypes.func,
  banners: PropTypes.array,
  list: PropTypes.array
}
export default connect ((state) => ({
  banners: state.bannerReducer.banners,
  list: state.homeListReducer.list
}))(Home);