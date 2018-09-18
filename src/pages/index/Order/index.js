import React, { Component } from 'react';
import http from '../../../APIService/http';
import OrderItem from './orderItem/index';
class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      list:[]
    }
  }

  /**
   * 获取订单列表的数据
   */
  async componentDidMount () {
    let page = this.state.page;
    try {
      let res = await http.get(`/api/getOrderList`, {
        page,
        size: 10
      })
      if (res.code === 0) {
        let list = res.data;
        if (page === 1) {
          this.setState({
            list
          })
        } else {
          let data = this.state.list.concat(list);
          this.setState({
            list: data
          })
        }
      }
    } catch(err) {
      console.log('111:',err);
    }
  }


  render () {
    let list = this.state.list
    return (
      <div>
        <h4 style={{height:'44px',lineHeight:'44px',color:'#333',textAlign:'center',
          fontSize:'17px',background: '#fff',fontWeight:'bold'}}
        >订单</h4>
        <OrderItem lists={list}/>
      </div>
    )
  }
}

export default OrderList;