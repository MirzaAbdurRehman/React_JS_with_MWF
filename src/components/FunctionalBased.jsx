// import React from 'react'

// const HelloWorld = () => {  // Arrow function syntax  Functional Component
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default HelloWorld




// 2nd way

// import React from 'react'

export default function HelloWorld() { // default export
  return ( 
    <div>
        <h1>Hello, World!</h1>
    </div>
  )
}

// import React from 'react'

export  function Calculate() {  // named export
  return (
    <div>
      <h1>Calculate Component</h1>
    </div>
  )
}

