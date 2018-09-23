import './index.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="header">
        <div className="back-icon"></div>
        <h4 className="header-title">{this.props.title}</h4>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string
}
export default Header;