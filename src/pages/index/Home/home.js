import React , { Component,Fragment } from 'react';
import NavBar from './navBar/index';
import Banner from './banner/index';

/**
 * 首页
 */
class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <Fragment>
        <NavBar/>
        <Banner/>
      </Fragment>
    )
  }
}

export default Home;