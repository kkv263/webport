import React, { Component } from 'react'
import { IntroWrapper, IntroTxt, IntroImg, IconWrapper, IntroIcon, IntroContentWrapper} from '../styles/Home.style';

class Home extends Component {
  render() {
    return (
        <IntroWrapper>
          <IntroContentWrapper>
            <IntroImg src={require('../assets/profile.png')}/>
            <IntroTxt weight={'1.5em'}>Kevin Vu</IntroTxt>
            <IntroTxt weight={'1em'}> Frontend Developer 
              <a style={{textDecoration:'none'}}href="https://www.brightfind.com/" target="_blank" rel="noopener noreferrer">
                <span style={{color: '#EA4E2E'}}> @Brightfind</span>
              </a>
            </IntroTxt>
            <IconWrapper>
              <a href="https://github.com/kkv263" target="_blank" rel="noopener noreferrer">
              <IntroIcon src={require('../assets/GitHub-Mark-64px.png')}/> </a>

              <a href="https://www.linkedin.com/in/kkv263/" target="_blank" rel="noopener noreferrer">
              <IntroIcon src={require('../assets/linkedin34.png')}/></a>

              <a href="https://www.dropbox.com/s/w4ir1hcdd8jzjhj/kevin_vu_resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
              <IntroIcon src={require('../assets/link-symbol.png')}/></a>

              <a href="mailto:kkv263@utexas.edu" target="_top">
              <IntroIcon src={require('../assets/envelope.png')}/></a>
            </IconWrapper>
          </IntroContentWrapper>
        </IntroWrapper>
    )
  }
}

export default Home;