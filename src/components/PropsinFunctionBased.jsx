

// props are the way to pass data fron parent to child component

import React, {useState} from 'react'

function PropsinFunctionBased(props) {

  const [firtname, setFirstname] = useState(props.firtname);
  const [email, setemail] = useState(props.email);

  return (
   <>
   <h2>Hello, {firtname}</h2>
   <h2>Hello, {email}</h2>
   <button onClick={() => setFirstname('Ahmed')}>Change Name</button>
   <br />
   <button onClick={() => setemail('ali12@gmail.com')}>Change Name</button>
   </>
  )
}

export default PropsinFunctionBased

