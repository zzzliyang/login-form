import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Login.css';
import Login from './Login';

class Root extends Component  {
  render () {
    return (
        <Login />
    )
  }
};

ReactDOM.render(<Root />, document.getElementById('root'));
