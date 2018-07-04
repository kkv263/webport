import styled from 'styled-components';

export const TitleText = styled.div`
color: #7B7B7B;
font-family: 'Dancing Script', cursive;
font-size:3em;
margin-top:50%;
margin-left:25%;
  @media all and (max-width: 768px) {
      margin-top:30%;
      margin-left:30%;
    }
`

export const CatPic = styled.img`
width:100%;
margin-top: 100px;
margin-left:2.5%;
@media all and (max-width: 768px) {
    display:none;
  }
`