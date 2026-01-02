import React from "react";
import HelloWorld, { Calculate } from "./components/FunctionalBased";
import ClassComponent, { ClassBased } from "./components/ClassBased";

function App() {
  return (
    <div className="App">
      

     <HelloWorld/>
      <p>Welcome to the React Application.</p>
      <Calculate/>
      <ClassComponent/>
      <ClassBased/>
    </div>
  );
}

export default App;
