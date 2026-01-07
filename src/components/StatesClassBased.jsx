
import React, { Component } from 'react'

export class StatesClassBased extends Component {


    constructor(props){
        super(props);

        this.state = {
            name: "Abdullah"
        }
    }

    updateName = () => {
        this.setState({
            name: "Rehan"
        })
    }

  render() {
    return (
     <>
        <h2>A.salam, {this.state.name}</h2>
        <button onClick={this.updateName}> Update</button>
     </>
    )
  }
}

export default StatesClassBased
