import React, { Component } from 'react';
import { MacLogo } from '../styles/Macro.style';

class Macro extends Component {
  render() {
    return (
      <div>
        <MacLogo src={require("../assets/macro2.png")} />
      </div>
    )
  }
}

export default Macro;
