import React, { Component } from 'react';
import './index.scss';

class My extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let nickName = 'gAX379298168';
    return (
      <div className="my">
        <div className="my-header">
          <img src={require('../My/imgs/default-avatar.png')} className="avatar"/>
          <p className="nickName">{nickName} &gt;</p>
        </div>

        <div className="my-bottom">
          <ul className="item">
            <li className="border-scale-1px">
              <i className="iconfont icon-cc-marker icon"></i>
              <span className="text">收货地址管理</span>
              <i className="iconfont icon-ARROW arrow"></i>
            </li>
            <li>
              <i className="iconfont icon-money icon"></i>
              <span className="text">商家代金券</span>
              <i className="iconfont icon-ARROW arrow"></i>
            </li>
          </ul>

          <ul className="item">
            <li className="border-scale-1px">
              <i className="iconfont icon-email icon"></i>
              <span className="text">意见反馈</span>
              <i className="iconfont icon-ARROW arrow"></i>
            </li>
            <li>
              <i className="iconfont icon-aui-icon-question icon"></i>
              <span className="text">常见问题</span>
              <i className="iconfont icon-ARROW arrow"></i>
            </li>
          </ul>

          <div className="phone">客服电话: 101-097-77</div>
          <p className="time">服务时间: 9:00-23:00</p>
        </div>
      </div>
    )
  }
}

export default My;