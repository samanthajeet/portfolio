import React from "react";
import Landing from "./components/Landing";
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import PersonalProject from './components/PersonalProejcts';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutMe />
      <Experience />
      <PersonalProject />
    </div>
  );
}

export default App;
