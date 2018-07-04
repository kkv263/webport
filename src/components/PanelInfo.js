import React, { Component } from 'react'
import {PanelInfoText, Button} from '../styles/Home.style';
import styled from 'styled-components';

export const ATag = styled.a`
text-decoration:none;
`

export default class PanelInfo extends Component {

  render() {
    return (
          <div>
            <PanelInfoText size="1em">
              {this.props.title} 
            <PanelInfoText size=".8em">
              {this.props.tech}
            </PanelInfoText>
            </PanelInfoText>
            <PanelInfoText size=".9em">
              {this.props.desc}
            </PanelInfoText>
            <PanelInfoText size=".9em">
              Notes:{this.props.notes}
            </PanelInfoText>
            <div style={{display:'flex', width:'50%', justifyContent:'space-around', marginLeft:'2%'}}>
            <ATag href={this.props.demo} 
            target="_blank" rel="noopener noreferrer">
            <Button>
              Demo
            </Button></ATag>
            <ATag href={this.props.source}
            target="_blank" rel="noopener noreferrer">
            <Button>
              Source
            </Button></ATag>
            </div>
          </div>
    )
  }
}
