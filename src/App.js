import React, { Component } from 'react';
import Home from './components/Home'; 
import styled from 'styled-components';
import {PanelContent} from './styles/Home.style';
import Jverbs from './components/Jverbs';
import Portfolio from './components/Portfolio';
import Smartflash from './components/Smartflash';
import Caturday from './components/Caturday';

const PanelWrapper = styled.div`
position:relative;
display:flex;
height:90vh;
margin-top:2.5%;
margin-left:1%;
margin-right:1%;
`

class App extends Component {
  render() {
    return (
      <PanelWrapper>
        <Home/>
        <PanelContent color={'#45B29D'}>
          <Jverbs/>
        </PanelContent>
        <PanelContent color={'#222823'}>
          <Portfolio/>
        </PanelContent>
        <PanelContent color={'linear-gradient(to bottom, #43739B 0%, #21282E 100%)'}>
          <Smartflash />
        </PanelContent>
        <PanelContent color={'linear-gradient(to bottom, #f1f1f1%, #eeeeee 100%)'}>
          <Caturday />
        </PanelContent>
      </PanelWrapper>
    );
  }
}

export default App;