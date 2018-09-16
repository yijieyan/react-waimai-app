import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { connect } from 'react-redux';
import { getHomeListData } from '../../actions/homeListAction';

/**
 *  首页的店铺列表
 */
class List extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 2,
      isFin: false
    }
  }


   scrollIsBottom () {
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.body.scrollHeight;
    let preDis = 50;
    let page = this.state.page;
    if (scrollTop + clientHeight > scrollHeight - preDis) { 
      console.log('111111:', page);
      if ( page < 5) {
         this.props.dispatch(getHomeListData(page));
        
      } else {
        this.setState({
          isFin: true
        })
      }
      page++;   
    }
    this.setState({
      page
    })
  }
  componentDidMount () {
    window.addEventListener('scroll', this.scrollIsBottom.bind(this));
  }

  UNSAFE_componentWillMount () {
    window.removeEventListener('scroll', this.scrollIsBottom.bind(this));
  }
  /**
   * 生成店铺左上角的品牌
   */
  createBrand (item) {
    let ret = null;
    if (item) {
      ret =  <div className="list-brand brand">品牌</div>
    }
    return ret;
  }

  /**
   * 生成星星
   */
  createStar (item) {
    let star = [];
    let starNums = item.wm_poi_score;
    // 有几个整星(激活的星星)
    let fullStars = +String(starNums).split('.')[0];
    // 有无半星
    let halfStars = +String(starNums).split('.')[1] >= 5 ? 1 : 0;
    // 没激活的星星
    let nullStars = 5 - fullStars - halfStars;

    for (let i= 0; i< fullStars; i++) {
      star.push(<li className="star iconfont icon-star active" key={'a'+i}></li>)
    }

    for (let i = 0; i< halfStars; i++) {
      star.push(<li className="star iconfont icon-32 active halfStar" key={'b'+i}></li>)
    }

    for (let i = 0 ; i< nullStars;i++) {
      star.push(<li className="star iconfont icon-star" key={'c' +1}></li>)
    }

    return star;
  }

  createTags (item) {
    let arr = item.discounts2;
    return arr.map(item => (
      <li key={item.id} className="tag-item clearfix">
        <img src={item.icon_url} className="tag-item-img"/>
        <p className="tag-item-text">{item.info}</p>
        <div className=""></div>
      </li>
    ))
  }
  /**
   * 生成店铺列表
   */
  createList () {
    let data = this.props.list;
    return data.map(item => (
        <li className="list-content clearfix border-scale-1px" key={item.id}>
          <div className="list-left">
            <img src={item.pic_url} className="list-img"/>
            {this.createBrand(item)}
          </div>
          <div className="list-right">
            <h4 className="list-right-title">{item.name}</h4>
            <div className="desc clearfix">
              <ul className="list-star ">
                {this.createStar(item)}
              </ul>
              <div className="count">月售{item.month_sale_num}</div>
              <div className="distance">{item.mt_delivery_time}&nbsp;|&nbsp;{item.distance}</div>
            </div>

            <div className="sendCondition">
              <div>
                {item.min_price_tip}
              </div>
            </div>

              <ul className="tag">
                {this.createTags(item)}
              </ul>
            </div>
          </li>
    ))
  }


  render () {
    return (
      <div className="list-container">
         <h4 className="list-title">附近店铺</h4>
         <ul>
          {this.createList()}
         </ul>
      </div>   
    )
  }
}

List.propTypes = {
  list: PropTypes.array,
  dispatch: PropTypes.func
}
export default connect(() => ({

}))(List);