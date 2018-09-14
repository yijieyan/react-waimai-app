import React, {Component} from 'react';
import { connect } from 'react-redux';
import BottomBar from '../BottomBar/index';
import Home from '../Home/home';

class Main extends Component {
  constructor(props) {
    super(props);
  }

 

  render () {
    return (
      <div>
        <Home/>
        <BottomBar/>
      </div>
    )
  }
}

export default connect(() => ({
 
}))(Main);