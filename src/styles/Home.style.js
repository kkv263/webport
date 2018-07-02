import styled from 'styled-components';

export const PanelContent = styled.div`
position:relative;
min-width:300px;
height:100%;
box-shadow: 0 2px 4px #000;
border-radius: 8px;
margin-left:1%;
background: ${props => props.color}; 
-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
filter: grayscale(100%);
transition: .2s ease;
overflow:hidden;
cursor:pointer;
  &:hover {    
    transform: scale(1.01);
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
background-color:white;
`

export const PanelInfoText = styled.p`
font-family: 'Roboto Mono', monospace;
font-size: ${props => props.size};
padding-left:2.5%;
padding-right:2.5%;
`

export const IntroWrapper = styled.div`
min-width:225px;
height:100%;
box-shadow: 0 2px 4px #000;
border-radius: 8px;
`

export const IntroContentWrapper = styled.div`
width:125px;
padding-top: 75px;
margin-left:50px;
`

export const IntroTxt = styled.h1`
font-family: 'Roboto Mono', monospace;
font-size: ${props => props.weight}; 
word-spacing: 100vw;
`

export const IntroImg = styled.img`
width:100px;
height:100px;
border-radius:50%;`

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