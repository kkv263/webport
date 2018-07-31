import React, { Component } from 'react';
import propTypes from 'prop-types';
import Home from './Home'; 
import styled from 'styled-components';
import {PanelContent, PanelInfoWrapper } from '../styles/Home.style';
import Jverbs from './Jverbs';
import Portfolio from './Portfolio';
import Smartflash from './Smartflash';
import Caturday from './Caturday';
import Macro from './Macro';
import PanelInfo from './PanelInfo';

import { connect } from 'react-redux';
import { changePanel } from '../actions/changePanel';
import Employment from './Employment';


const PanelWrapper = styled.div`
position:relative;
display:flex;
height:90vh;
margin-top:2.5%;
padding-left:1%;

@media all and (max-width: 768px) {
  flex-direction: column;
  height:auto;
  width:90%;
  margin-left:auto;
  margin-right:auto;
}
`

class Panel extends Component {
  constructor(props){
    super(props); 
    this.handlePanel = this.handlePanel.bind(this);
  };


  handlePanel(value){
    this.props.changePanel(value);
  };

  render() {
    var demo = "";
    var source = "";
    var desc = "";
    var notes = ""
    var title = "";
    var tech = ""
    var panelInfo = null;

      switch(this.props.panel){
        case 1:
          demo = "https://kkv263.github.io/jpnverbs/"
          source="https://github.com/kkv263/jpnverbs"
          desc="Compiled an online, searchable database that conjugates 100,000 Japanese verbs."
          notes="No Mobile Support"
          tech= "MongoDB Express NodeJS React+Redux"
          title="JpnVerbs"
          break;
        case 2:
          demo = "https://kkv263.github.io/portfolio2/"
          source="https://github.com/kkv263/portfolio2"
          desc="Made a portfolio showcasing my projects with a simple theme and readable layout (Legacy)."
          notes="Mobile Support"
          tech= "React"
          title="Legacy Portfolio" 
          break;
        case 3:
          demo = "https://play.google.com/store/apps/details?id=com.vuwoo.macrocalculator"
          source="https://github.com/kkv263/MacroCalculator"
          desc= "Developed a android mobile app with 50,000+ downloads. It provides daily macronutrient calculations to help users manage calorie intake."
          notes= "Upcoming update in React Native"
          tech= "Java, XML, Android Studio"
          title="MacroCalculator"
          break;
        case 4:
          demo = "https://kkv263.github.io/smartflash/"
          source="https://github.com/kkv263/smartflash"
          desc= "Programmed an audible flashcards-style studying Alexa skill for foreign languages, paired with web app."
          notes="No Mobile Support, No Functionality"
          tech= "AWS, NodeJS, React, MongoDB"
          title="Smartflash (HACKTX'17)" 
        break;
        case 5:
          demo = "https://kkv263.github.io/caturday/"
          source="https://github.com/kkv263/caturday"
          desc="Created website design in React featuring cats."
          notes="N/A"
          tech= "React"
          title="Caturday" 
        break; 
        default:
          break;
      }

      panelInfo = (
      <PanelInfoWrapper >
        <PanelInfo demo={demo} source={source} desc={desc} notes={notes} tech={tech} title={title}/>
      </PanelInfoWrapper>)

    return (
      <PanelWrapper>
          <Home/>
          <PanelContent>
            <Employment></Employment>
          </PanelContent>
          <PanelContent onClick={() => this.handlePanel(1)} color={'#45B29D'}>
            <Jverbs /> 
            {this.props.panel === 1 ? panelInfo : null}
          </PanelContent>
          <PanelContent color={'#222823'} onClick={() => this.handlePanel(2)}>
            <Portfolio/>
            {this.props.panel === 2 ? panelInfo : null}
          </PanelContent>
          <PanelContent color={'#1fb5fc'} onClick={() => this.handlePanel(3)}>
            <Macro />
            {this.props.panel === 3 ? panelInfo : null}
          </PanelContent>
          <PanelContent color={'linear-gradient(to bottom, #43739B 0%, #21282E 100%)'} onClick={() => this.handlePanel(4)}>
            <Smartflash />
            {this.props.panel === 4 ? panelInfo : null}
          </PanelContent>
          <PanelContent  onClick={() => this.handlePanel(5)}>
            <Caturday />
            {this.props.panel === 5 ? panelInfo : null}
          </PanelContent>
          <div style={{visibility:'hidden'}}>lol</div>
        </PanelWrapper>
    )
  }
}

Panel.propTypes = {
  changePanel: propTypes.func.isRequired,
  panel: propTypes.number.isRequired
}

const mapStateToProps = state => ({
  panel: state.panel.panel
});

export default connect(mapStateToProps, {changePanel})(Panel);