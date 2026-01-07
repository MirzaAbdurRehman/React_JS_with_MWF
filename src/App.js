import React from "react";
import HelloWorld, { Calculate } from "./components/FunctionalBased";
import ClassComponent, { ClassBased } from "./components/ClassBased";
import { JSX } from "./components/JSX";
import JSX_Fragments from "./components/JSX_Fragments";
import Click_Events from "./components/Click_Events";
import StatesFunctionBased from "./components/StatesFunctionBased";
import StatesClassBased from "./components/StatesClassBased";
import PropsinFunctionBased from "./components/PropsinFunctionBased";
import GetInputData from "./components/getInputData";


function App() {
  return (
    <div className="App">
      

     <HelloWorld/>
      <p>Welcome to the React Application.</p>
      {/* <Calculate/>
      <ClassComponent/>
      <ClassBased/>
      <JSX/>
      <JSX_Fragments/>
      <Click_Events/> */}

      {/* <StatesFunctionBased/> */}


      {/* <StatesClassBased/> */}

      {/* <PropsinFunctionBased firtname ="Munim" email = "munim12@gmail.com"/> */}
      <GetInputData/>
    </div>
  );
}

export default App;
