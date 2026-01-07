
import React, {useState} from 'react';

const StatesFunctionBased = () => {

    const [name, setName] = useState("Abdullah");

    function updateName (){
        setName("Ali");
    }


    console.log('Rendering StatesFunctionBased');
  return (
   <>
   <h2>Hey, {name}</h2>
   <button onClick={updateName}> Update</button>
   </>
  )
}

export default StatesFunctionBased


