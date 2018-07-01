import styled from 'styled-components';

export const TitleBox = styled.div`
border:8px solid #FFF9A5;
width:200px;
height:50px;
margin-top:175px;
text-align:center;
position:relative;
margin-left:42px;
`

export const TitleText = styled.div`
top:4px;
color: #FFF9A5;
font-family: 'Inconsolata', monospace;
font-size:2em;
`

export const LegacyText = styled.div`
position:absolute;
right:25px;
color: #FFF9A5;
font-family: 'Inconsolata', monospace;
font-size:.75em;
`
export const Star = styled.div`
position:absolute;
background-color: #E1EFE6;
height: 3px; 
width: 3px; 
border-radius:50%;
box-shadow: 0px 0px 7px 1px #fff;
left:${props => props.left};
top: ${props => props.top};
`

export const ProjectStar = styled.img`
position: absolute;
top: ${props => props.top};
left:${props => props.left};
height: ${props => props.h};
width: ${props => props.w};
`