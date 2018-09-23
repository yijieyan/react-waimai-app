import './index.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeTabs } from '../../actions/headerAction';
import http from '../../../../APIService/http';
class CategoryType extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: {}
    }
  }


  async componentDidMount () {
    try {
      let res = await http.get(`/api//getCategoryType`)
      if (res.code === 0) {
        this.setState({
          data: res.data
        })
      } else {
        throw new Error('error');
      }
    } catch(err) {
      console.log('error:',err);
    }
  }
  /**
   * 点击切换title
   */
  changeTabs (item) {
    this.props.dispatch(changeTabs({active: item.key}))
  }
  /**
   * 生成tite
   */
  createTitle () {
    let arrs = this.props.tabs;
    let active = this.props.active;
    return arrs.map(item => {
      let cls = item.key + ' item';
      let clas = item.key;
      if (item.key === active) {
        cls += ' active';
        clas += ' active';
      }
      return (
        <li key={item.key} className={cls} onClick={() => this.changeTabs(item)}>
          <span className={item.key === active ? 'active' : ''}>{item.text}</span>
          <i className={clas}></i>
      </li>
      )
    })
  }


  createItem (items) {
    return items.map(item => (
      <li key={item.name} className="item">
        <span>
          {item.name}({item.quantity})
        </span>
      </li>
    ))
  }
  /**
   * 生成第一个过滤条件
   */
  createName (data) {
    let arrs = []
    for (let key in data) {
      let item = data[key]
      arrs.push(
        <li key={item.name}>
          <div className="title">{item.name} <span className="count">{item.quantity}</span></div>
          <ul className="items">
            {
              this.createItem(item.sub_category_list)
            }
          </ul>
        </li>
      )
    }
    return arrs;
  }



  render () {
    let data = this.state.data;
    return (
      <div className="categofy-fulter">
        <ul className="categofy-top">
          {this.createTitle()}
        </ul>
        <div className="fulter-body">
          <ul className="body-name">
            {this.createName(data.category_filter_list)}
          </ul>
        </div>
      </div>
    )
  }
}

CategoryType.propTypes = {
  tabs: PropTypes.array,
  active: PropTypes.string,
  dispatch: PropTypes.func
}
export default connect((state) => ({
  tabs: state.headerReducer.tabs,
  active: state.headerReducer.active
}))(CategoryType);