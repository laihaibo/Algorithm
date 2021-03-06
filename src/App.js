import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <div className={style.App_header}>
          <img src={logo} className={style.App_logo} alt="logo" />
          <h2 className={style.App_h2}>Welcome to React</h2>
        </div>
        <p className={style.App_intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
