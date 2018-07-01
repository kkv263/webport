import React, { Component } from 'react';
import { Logo } from '../styles/Smartflash.style';

class Smartflash extends Component {
  render() {
    return (
      <div>
        <Logo src={require("../assets/flashlogo.png")} />
      </div>
    )
  }
}

export default Smartflash;
