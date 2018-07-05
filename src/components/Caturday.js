import React, { Component } from 'react'
import { CatLogo } from '../styles/Caturday.style';

class Caturday extends Component {
  render() {
    return (
      <div>
        <CatLogo src={require('../assets/cat.png')}></CatLogo>
      </div>
    )
  }
}

export default Caturday; 