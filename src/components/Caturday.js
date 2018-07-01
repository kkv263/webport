import React, { Component } from 'react'
import { TitleText, CatPic } from '../styles/Caturday.style';

class Caturday extends Component {
  render() {
    return (
      <div>
        <TitleText>Caturday</TitleText>
        <CatPic src={require('../assets/cat.png')}/>
      </div>
    )
  }
}

export default Caturday; 