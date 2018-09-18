import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class OrderList extends Component {
  constructor (props) {
    super(props);

  }

  /**
   * 生成买过的菜
   */
  createMenus (data) {
    return data.map((item, index) => (
      <div key={index + 'a'} className="menu">
        {item.product_name}
        <span className="menuCount">x{item.product_count}</span> 
      </div>
    ))
  }

  createItem (data) {
    return data.map(item => (
      <li key={item.wm_order_id} className="order-item border-scale-1px">
        <div className="left">
          <img src={item.poi_pic} className="order-img"/>
        </div>
        <div className="right">
          <div className="firstLine border-scale-1px">
            <h4>{item.poi_name}</h4>
            <i className="iconfont arrow icon-ARROW"></i>
            <span>{item.status_description}</span>
          </div>

          <section className="secondLine">
            {this.createMenus(item.product_list)}
          </section>
          <p className="desc">
            总共{item.product_count}个菜,实付
            <span className="money">￥{item.total}</span>
          </p>
        </div>
      </li>
    ))
  }

  render () {
    let data = this.props.lists;
    return (
      <ul className="order-list">
        {this.createItem(data)}
      </ul>
    )
  }
}

OrderList.propTypes = {
  lists: PropTypes.array
}
export default OrderList;