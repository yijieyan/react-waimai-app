import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import BottomBar from '../BottomBar/index';
import Home from '../Home/home';

class Main extends Component {
  constructor(props) {
    super(props);
  }

 

  render () {
    return (
      <Fragment>
        <Home/>
        <BottomBar/>
      </Fragment>
    )
  }
}

export default connect(() => ({
 
}))(Main);