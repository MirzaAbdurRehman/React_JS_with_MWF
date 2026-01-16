import React, { Component } from 'react'

export class ComponentDidUpdate extends Component {

    constructor(){
        super();
        this.state = {
           count: 0,
        }
        console.log('Constructor Method Call');
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Component Did Update Method Call');
        console.log('Previous State:', prevState);

        if(prevState.count < 5 ){
            this.setState({count: this.state.count + 1});
        }
    }


  render() {
    console.log('Render Method Call');
    return (
      <>
        <h2>Component Did Update Method in Class Based Component</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => {this.setState({count: this.state.count + 1})}}>Increase Count</button>
      </>
    )
  }
}

export default ComponentDidUpdate
