import React , { Component } from 'react';
import Heador from '../../../components/header/index';
import CateGoryType from './type/index';
class CategoryHome extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <Heador title="美团超市"/>
        <CateGoryType/>
      </div>
    )
  }
}


export default CategoryHome;