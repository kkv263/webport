import React, { Component } from 'react';
import { Logo } from '../styles/Jverbs.style';

class Jverbs extends Component {
  render() {
    return (
      <div>
        <Logo src={require("../assets/jlogo.png")} />
      </div>
    )
  }
}

export default Jverbs;