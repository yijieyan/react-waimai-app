import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CategoryHome from '../Category/home';


class Main extends Component {
  constructor(props) {
    super(props);
  }

 

  render () {
    return (
      <Fragment>
        <CategoryHome/>
      </Fragment>
    )
  }
}

export default connect(() => ({
 
}))(Main);