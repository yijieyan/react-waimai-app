import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Main from './index';

class Container extends Component {
  
  render () {
    return (
      <div>
        <Main/>
      </div>
    )
  }
}

export default hot(module)(Container);