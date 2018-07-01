import React, { Component } from 'react'
import { TitleBox, TitleText, LegacyText, Star, ProjectStar } from '../styles/Portfolio.style';

class Portfolio extends Component {

  render() {
    return (
      <div style={{position: 'relative'}}>
        <TitleBox>
          <TitleText>Portfolio</TitleText>
          <LegacyText>(Legacy)</LegacyText>
        </TitleBox>
        {/* definitely can clean up */}
        <Star left={"30px"} top={"-50px"}/>
        <Star left={"40px"} top={"-100px"}/>
        <Star left={"180px"} top={"-120px"}/>
        <Star left={"280px"} top={"-90px"}/>
        <Star left={"50px"} top={"100px"}/>
        <Star left={"20px"} top={"200px"}/>
        <Star left={"60px"} top={"460px"}/>
        <Star left={"200px"} top={"150px"}/>
        <Star left={"170px"} top={"300px"}/>
        <Star left={"280px"} top={"200px"}/>
        <Star left={"200px"} top={"400px"}/>
        <Star left={"250px"} top={"370px"}/>
        <ProjectStar w="50%" top="-150px" left="125px" src={require("../assets/leo.svg")}/>
        <ProjectStar w="40%" top="-170px" left="25px" src={require("../assets/aries.svg")}/>
        <ProjectStar w="40%" top="80px" left="116px" src={require("../assets/canismajor.svg")}/>
        <ProjectStar w="40%" top="250px" left="30px" src={require("../assets/pegasus.svg")}/>
        <ProjectStar w="70%" top="400px" left="56px" src={require("../assets/bigdipper.svg")}/>
      </div>
    )
  }
}

export default Portfolio; 