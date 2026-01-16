import React, { Component } from 'react'

export class Rendering extends Component {

    constructor() {
        super();
        this.depart = 'CSE';
    }
  render() {

    console.log('Render Method Call:', this.depart);
    return (
     <>
     <h2>Render Mehtod Classed Based Componnet</h2>
     <h3>Hello, {this.depart} "Department"</h3>
     <button onClick={() => {this.depart = "BESE"; this.forceUpdate();}}>Update Department</button>
     </>
    )
  }
}

export default Rendering
