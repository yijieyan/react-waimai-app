import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Main from './index';

class Container extends Component {
  
  render () {
    return (
      <Fragment>
        <Main/>
      </Fragment>
    )
  }
}

export default hot(module)(Container);