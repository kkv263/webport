import styled, {keyframes} from 'styled-components';

export const fadeIn = props => keyframes`
from { opacity: ${props.opa ? 1 : 0}; 
      transform:         translateY(${props.opa ? '0px' : '50px'});
      -webkit-transform: translateY(${props.opa ? '0px' : '50px'});
      -moz-transform:    translateY(${props.opa ? '0px' : '50px'});
      -ms-transform:     translateY(${props.opa ? '0px' : '50px'});
      -o-transform:      translateY(${props.opa ? '0px' : '50px'});
      transform:         translateY(${props.opa ? '0px' : '50px'});
      }
to   { opacity: ${props.opa ? 0 : 1};
      transform: translateY(${props.opa ? '50px' : '0px'});
      -webkit-transform: translateY(${props.opa ? '50px' : '0px'});
      -moz-transform:    translateY(${props.opa ? '50px' : '0px'});
      -ms-transform:     translateY(${props.opa ? '50px' : '0px'});
      -o-transform:      translateY(${props.opa ? '50px' : '0px'});
      transform:         translateY(${props.opa ? '50px' : '0px'});
}
`

export const PanelContent = styled.div`
-webkit-transform: translateZ(0);
-webkit-backface-visibility: hidden;
-webkit-perspective: 1000;
position:relative;
min-width:300px;
height:100%;
box-shadow: 0 2px 4px #000;
border-radius: 8px;
margin-left:1%;
background: ${props => props.color}; 
-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
filter: grayscale(100%);
transition: all .1s ease;
overflow:hidden;
cursor:pointer;
  &:hover {    
    transform: scale(1.01);
    -webkit-transform: scale(1.01);
    -moz-transform:    scale(1.01);
    -ms-transform:     scale(1.01);
    -o-transform:      scale(1.01);
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }
  @media all and (max-width: 768px) {
  height:330px;
  margin-top: 5%;
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
`

export const PanelInfoWrapper = styled.div`
position:absolute;
bottom:0;
height:50%;
min-width:300px;
border-radius: 8px;
word-wrap: break-word;
background-color:white;
animation: ${fadeIn} .5s ease;
opacity: ${props => props.fade ? 0 : 1};
@media all and (max-width: 768px) {
  height:100%;
  width:100%;
  }
`

export const PanelInfoText = styled.h1`
font-family: 'Roboto Mono', monospace;
font-size: ${props => props.size};
padding-left:5%;
padding-right:5%;
`

export const Button = styled.div`
font-family: 'Roboto Mono', monospace;
width:60px;
height:20px;
border-radius: 8px;
background-color:#08B2E3;
box-shadow: 0px 3px 0px #0599c1;
text-align:center;
color: #F9f9f9;
font-size: .9em; 
outline: none;
cursor: pointer;
transition: all ease 0.2s;
  &:active {
    background-color: #08B2E3;
    box-shadow: 0 1px 0 #0599c1;
    transform:translateY(2px);
  }
`

export const IntroWrapper = styled.div`
min-width:225px;
height:100%;
box-shadow: 0 2px 4px #000;
border-radius: 8px;
overflow:hidden;
  @media all and (max-width: 768px) {
    height:300px;
    width:100%;
  }
`


export const IntroContentWrapper = styled.div`
width:125px;
padding-top: 75px;
margin-left:50px;
  @media all and (max-width: 768px) {
    padding-top: 7%;
    margin-left:auto;
    margin-right:auto;
  }
`

export const IntroTxt = styled.h1`
font-family: 'Roboto Mono', monospace;
font-size: ${props => props.weight}; 
word-spacing: 100vw;
`

export const IntroImg = styled.img`
width:100px;
height:100px;
border-radius:50%;
  @media all and (max-width: 768px) {
      display:none;
    }
`

export const IconWrapper = styled.div`
margin-top:25px;
display:flex;
justify-content:space-between;
`

export const IntroIcon = styled.img`
width:20px;
height:20px;
cursor:pointer;
`