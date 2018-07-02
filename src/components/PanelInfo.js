import React, { Component } from 'react'
import {PanelInfoWrapper, PanelInfoText} from '../styles/Home.style';

export default class PanelInfo extends Component {

  render() {
    return (
          <PanelInfoWrapper>
            <PanelInfoText size="1em">
              {this.props.title} 
            </PanelInfoText>
            <PanelInfoText size=".8em">
              {this.props.desc}
            </PanelInfoText>
            <PanelInfoText size=".8em">
              Demo:{this.props.demo}
            </PanelInfoText>
            <PanelInfoText size=".8em">
              Source:{this.props.source}
            </PanelInfoText>
            <PanelInfoText size=".8em">
              Notes:{this.props.notes}
            </PanelInfoText>
          </PanelInfoWrapper>
    )
  }
}
