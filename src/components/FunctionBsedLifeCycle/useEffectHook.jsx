
import React, {useState,useEffect} from 'react'

const UseEffectHook = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('UseEffect Hook Called');
    }, [count]);
  return (
    <>
    <h2>UseEffect With Hooks</h2>
    <h3>Count: {count}</h3>
    <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  )
}

export default UseEffectHook
