import React, { Component } from 'react'
import {PanelInfoText, Button} from '../styles/Home.style';

export default class PanelInfo extends Component {

  render() {
    return (
          <div>
            <PanelInfoText size="1em">
              {this.props.title} 
            <PanelInfoText size=".7em">
              {this.props.tech}
            </PanelInfoText>
            </PanelInfoText>
            <PanelInfoText size=".8em">
              {this.props.desc}
            </PanelInfoText>
            <PanelInfoText size=".8em">
              Notes:{this.props.notes}
            </PanelInfoText>
            <div style={{display:'flex', width:'50%', justifyContent:'space-around', marginLeft:'2%'}}>
            <a href={this.props.demo} 
            target="_blank" rel="noopener noreferrer" style={{textDecorationLine:"none"}}>
            <Button>
              Demo
            </Button></a>
            <a href={this.props.source}
            target="_blank" rel="noopener noreferrer" style={{textDecorationLine:"none"}}>
            <Button>
              Source
            </Button></a>
            </div>
          </div>
    )
  }
}
