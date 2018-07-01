import React, { Component } from 'react'
import { IntroWrapper, IntroTxt, IntroImg, IconWrapper, IntroIcon, IntroContentWrapper} from '../styles/Home.style';

class Home extends Component {
  render() {
    return (
        <IntroWrapper>
          <IntroContentWrapper>
            <IntroImg src={require('../assets/profile.png')}/>
            <IntroTxt weight={'1.5em'}>Kevin Vu</IntroTxt>
            <IntroTxt weight={'1em'}><span style={{color: '#08B2E3'}}>Aspiring</span> Web Developer</IntroTxt>
            <IconWrapper>
              <a href="https://github.com/kkv263" target="_blank" rel="noopener noreferrer">
              <IntroIcon src={require('../assets/GitHub-Mark-64px.png')}/> </a>

              <a href="https://www.linkedin.com/in/kkv263/" target="_blank" rel="noopener noreferrer">
              <IntroIcon src={require('../assets/linkedin34.png')}/></a>

              <a href="https://www.dropbox.com/s/w4ir1hcdd8jzjhj/kevin_vu_resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
              <IntroIcon src={require('../assets/link-symbol.png')}/></a>

              <IntroIcon src={require('../assets/envelope.png')}/>
            </IconWrapper>
          </IntroContentWrapper>
        </IntroWrapper>
    )
  }
}

export default Home;