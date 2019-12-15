import React, { Component } from "react";
import { RegularContainer, MainContainer } from "./Styles";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <MainContainer>
        <RegularContainer>
          <h2>about me</h2>
          <p>This is the part where I talk about myself in the third person</p>
        </RegularContainer>
      </MainContainer>
    );
  }
}

export default AboutMe;
