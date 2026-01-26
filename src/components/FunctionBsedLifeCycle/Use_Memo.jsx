
import React, { useMemo, useState } from 'react'

const Use_Memo = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // Without useMemo - this runs every render
  // const expensiveCalculation = () => {
  //   console.log('Calculating without useMemo...');
  //   let sum = 0;
  //   for (let i = 0; i < number * 1000000; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // };
  // const result = expensiveCalculation();

  // With useMemo - only recalculates when 'number' dependency changes
  const result = useMemo(() => {
    console.log('Calculating with useMemo...');
    let sum = 0;
    for (let i = 0; i < number * 1000000; i++) {
      sum += i;
    }
    return sum;
  }, [number]); // Only recalculate when 'number' changes, NOT when 'count' changes

  return (
    <>
      <h2>useMemo Hook Example</h2>
      
      <div style={{ border: '2px solid blue', padding: '10px', margin: '10px 0' }}>
        <h3>Expensive Calculation Result: {result}</h3>
        <p>This value only recalculates when 'number' changes</p>
      </div>

      <div style={{ border: '2px solid green', padding: '10px', margin: '10px 0' }}>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>
          Increment Count (No recalculation)
        </button>
        <p>Clicking this does NOT trigger expensive calculation</p>
      </div>

      <div style={{ border: '2px solid red', padding: '10px', margin: '10px 0' }}>
        <h3>Number: {number}</h3>
        <button onClick={() => setNumber(number + 1)}>
          Increment Number (Triggers recalculation)
        </button>
        <p>Clicking this DOES trigger expensive calculation (check console)</p>
      </div>
    </>
  )
}

export default Use_Memo
