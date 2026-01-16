

import React, { Component } from 'react'

export class Constructor extends Component {
    constructor() {
        super();
        this.state = {
            name: 'John Doe',
            age: 30
        }
    }
  render() {
    return (
      <>
      <h2>This is a Life Cycle of class based component</h2>
      <h3>Hello, {this.state.name}</h3>
      <h3>Age, {this.state.age}</h3>
      </>
    )
  }
}

export default Constructor
