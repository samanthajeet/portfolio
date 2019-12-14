import styled from "styled-components";

let landingColor;

const colors = {
  red: "#FF1743",
  indigo: "#536DFD",
  deepPurple: "#5E35B1",
  cyan: "#00BCD4",
  lightGreen: "#9CCC65"
};

const introColor = (colors) => { //chooses randome color from colors object
    let keys = Object.keys(colors);
    landingColor = colors[keys[(keys.length * Math.random()) << 0]]
};
introColor(colors);


export const LandingContainer = styled.div`
  height: 100%;
  border: 1px solid ${landingColor};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: "Nanum Myeongjo", serif;
    color: ${landingColor};
  }
`;
