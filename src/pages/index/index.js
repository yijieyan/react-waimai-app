import React from 'react';
import ReactDom from 'react-dom';
import Container from './Main/Container';
import { Provider } from 'react-redux';
import store from './store';
ReactDom.render(
  <Provider store={ store }><Container/></Provider>
,document.getElementById('root'));