import React , { Component } from 'react';
import NavBar from './navBar/index';

/**
 * 首页
 */
class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <NavBar/>
      </div>
    )
  }
}

export default Home;