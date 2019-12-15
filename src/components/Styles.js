import styled from "styled-components";

let landingColor;
let primaryColor = '#FFB300';

const colors = {
  red: "#FF1743",
  teal: "#009688",
  orange: '#EF6C00',
  blueGray: '#455A64B',
  amber: '#FFCA28'
};

const introColor = (colors) => { //chooses randome color from colors object
    let keys = Object.keys(colors);
    landingColor = colors[keys[(keys.length * Math.random()) << 0]]
};
introColor(colors);


export const MainContainer = styled.div`
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  h1, h2 {
    font-family: 'Nunito', sans-serif;
    color: white;
    font-weight: 400;
  }

  h2{
    color: black;
    background: ${primaryColor};
    width: fit-content;
    padding: 0 .25em;
  }
`
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColoredContainer = styled(Container)`
  background: ${primaryColor};
  
`

export const RegularContainer = styled(Container)`
  align-items: flex-start;
  border: 2px solid ${primaryColor};
  padding-left: 5em;

`;

