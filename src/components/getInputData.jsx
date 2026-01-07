
import React, {useState} from 'react'

function GetInputData() {

    const [inputValue, setinputValue] = useState('');
    const [isNotSubmitted, isSubmitted] = useState(false);

    function getValue(data){
        setinputValue(data.target.value);
        isSubmitted(false);
    }
  return (
    <>
    {
        isNotSubmitted ? <h2>Your Input Data is: {inputValue}</h2> : null
    }
    <input type="text" onChange={getValue}/>
    <button onClick={() => isSubmitted(true)}> Display Value</button>
    </>
  )
}

export default GetInputData
