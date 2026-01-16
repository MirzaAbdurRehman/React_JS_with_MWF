import React, { Component } from 'react'

export class ComponentDidMount extends Component {

    constructor(){
        super();
        this.state = {
            name: 'Shahrukh'
        }
        console.log('Constructor Method Call');
    }

    componentDidMount(){
        console.log('Component Did Mount Method Call');
    }
  render() {
    console.log('Render Method Call');
    return (
     <>
        <h2>Component Did Mount Method in Class Based Component</h2>
        <h3>Hello, {this.state.name}</h3>
        <button onClick={() => {this.setState({name: 'Ali'})}}>Change</button>
     </>
    )
  }
}

export default ComponentDidMount
