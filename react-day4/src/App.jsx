import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User.jsx";
import College from "./College.jsx";
import Name from "./Name.jsx";
import Style from "./Style.jsx";

function App() {
  // 1st way to pass Props

  // let name = "Omkar Kasar";
  // let age = 29;
  // let branch = "Electrical Engineering";

  // passing object as Props (good way) for passing multiple props
  let userObj = {
    name: "umesh Kasar",
    age: "39",
    branch: "Civil Engineering"
  }

  let userObj2 = {
    name: "pooja Kasar",
    age: "31",
    branch: "Mechanical Engineering"
  }

  // passing array as Props
  let CollegeName = ["Apna College", "COEP", "PCCOE", "MIT"];
  return (
    <>
      <h1>Props in react</h1>
      {/* // 1st way to pass Props */}
      {/* <User name={name} age={age} branch={branch} /> */}
      <br></br>
      {/* 2nd way to pass Props */}
      {/* <User name={"Vaishnavi kasar"} age={23} branch={"Computer Science"}/> */}

      {/*  passing object as Props (good way) for passing multiple props */}
      <User info={userObj} />
      <User info={userObj2} />
      <hr /> 
      <College name={CollegeName} />
      <hr></hr>
      <h1>Default Props</h1>
      <Name name="Mauu"/>
      <Name />
      <hr></hr>
      {/* <Style /> */}
      {/* 2nd way */}
      <Style color="red"><h1>Style Component</h1></Style>
      <Style ><h1>Style Component 2</h1></Style>
    </>
  );
}

export default App;
