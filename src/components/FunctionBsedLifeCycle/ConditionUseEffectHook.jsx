
import React, {useState,useEffect} from 'react'

const ConditionUseEffectHook = () => {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(25);

    useEffect(() => {
        console.log('UseEffect Hook Called');
    }, [count]);

    useEffect(() => {
        console.log('Age State Updated');
    }, []);

    return (
      <>
        <h2>UseEffect With Hooks</h2>
        <h3>Count: {count}</h3>
        <button onClick={() => setAge(age + 1)}>Increase Age</button>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </>
    );
  }

export default ConditionUseEffectHook
