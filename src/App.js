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
import FormHandling from "./components/FormHandling";
import ApiFetch from "./components/ApiFetch";
import ArrayListing from "./components/ArrayListing";
import Constructor from "./components/classbasedLifeCycle/Constructor";
import Rendering from "./components/classbasedLifeCycle/Rendering";
import ComponentDidMount from "./components/classbasedLifeCycle/ComponentDidMount";
import ComponentDidUpdate from "./components/classbasedLifeCycle/ComponentDidUpdate";
import ShoulComponentUpdate from "./components/classbasedLifeCycle/ShoulComponentUpdate";
import UseEffectHook from "./components/FunctionBsedLifeCycle/useEffectHook";
import ConditionUseEffectHook from "./components/FunctionBsedLifeCycle/ConditionUseEffectHook";


function App() {
  return (
    <div className="App">
      

     {/* <HelloWorld/>
      <p>Welcome to the React Application.</p> */}
      {/* <Calculate/>
      <ClassComponent/>
      <ClassBased/>
      <JSX/>
      <JSX_Fragments/>
      <Click_Events/> */}

      {/* <StatesFunctionBased/> */}


      {/* <StatesClassBased/> */}

      {/* <PropsinFunctionBased firtname ="Munim" email = "munim12@gmail.com"/> */}
      {/* <GetInputData/> */}

      {/* <FormHandling/> */}

      {/* <ApiFetch/> */}
      {/* <ArrayListing/> */}
      {/* <Constructor/> */}
      {/* <Rendering/> */}
      {/* <ComponentDidMount/> */}
      {/* <ComponentDidUpdate/> */}

      {/* <ShoulComponentUpdate/> */}

      {/* <UseEffectHook/> */}

      < ConditionUseEffectHook/>
    </div>
  );
}

export default App;
