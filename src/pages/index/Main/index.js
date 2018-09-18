import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import BottomBar from '../BottomBar/index';
// import Home from '../Home/home';
// import My from '../My/index';
import Order from '../Order/index';

class Main extends Component {
  constructor(props) {
    super(props);
  }

 

  render () {
    return (
      <Fragment>
        {/* <Home/> */}
        {/* <My/> */}
        <Order/>
        <BottomBar/>
      </Fragment>
    )
  }
}

export default connect(() => ({
 
}))(Main);