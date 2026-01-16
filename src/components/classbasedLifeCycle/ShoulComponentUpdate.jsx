import React, { Component } from 'react'

export class ShoulComponentUpdate extends Component {

      constructor(){
        super();
        this.state = {
           count: 0,
        }
        console.log('Constructor Method Call');
    }

    shouldComponentUpdate(){
        console.log('Should Component Update Method Call', this.state.count);
        return true;
    }

  render() {
    console.log('Render Method Call');
    return (
     <>
        <h2>Should Component Update Method in Class Based Component</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => {this.setState({count: this.state.count + 1})}}>Increase Count</button>
     </>
    )
  }
}

export default ShoulComponentUpdate
