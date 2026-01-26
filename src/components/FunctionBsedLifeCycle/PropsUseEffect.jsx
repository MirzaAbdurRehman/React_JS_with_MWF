
import React, { useEffect } from 'react'

const PropsUseEffect = (props) => {

    useEffect( () => {
        console.log('UseEffect With Props Count', props.count);
    }, [props.count]);

    useEffect( () => {
        console.log('UseEffect With Props Age', props.age);  
    }, [props.age]);

  return (
    <>
    <h2>UseEffect Hook Specific States & props</h2>
    <h3>Count: {props.count}</h3>
    <h3>Age:  {props.age}</h3>
    </>
  )
}

export default PropsUseEffect


