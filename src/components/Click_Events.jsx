
import React from 'react'

const Click_Events = () => {

    const hanleClick = () => {  // local scope
        let firstName = "Munim";
        let lastName = "Ahmed";
        alert(`Hello ${firstName} ${lastName}`);
    }

    let firstName = "Ali";  // global scope

    
  return (
    <>
    <h2>Hey, {firstName}</h2>
    <button onClick={hanleClick}>Click Me</button>
    <br />
    <button onClick={() => alert(`Hey! ${firstName}`)}> Click First</button>
    </>
  )
}

export default Click_Events
