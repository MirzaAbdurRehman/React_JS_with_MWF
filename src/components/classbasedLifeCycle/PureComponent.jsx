import React, { PureComponent, Component } from 'react'

export class Pure_Component extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
  render() {

    console.log('Pure Component Rendered with props:', this.props);
    return (
      <>
      <h2>Pure Component (Prevents Re-render)</h2>
      <h3>Received Value: {this.props.value}</h3>
      <h3>Internal Count: {this.state.count}</h3>
        <button onClick={ () => this.setState({count: this.state.count + 1})}>Increment Internal Count</button>
      </>
    )
  }
}

// Regular component for comparison
export class Regular_Component extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
  render() {

    console.log('Regular Component Rendered with props:', this.props);
    return (
      <>
      <h2>Regular Component (Always Re-renders)</h2>
      <h3>Received Value: {this.props.value}</h3>
      <h3>Internal Count: {this.state.count}</h3>
        <button onClick={ () => this.setState({count: this.state.count + 1})}>Increment Internal Count</button>
      </>
    )
  }
}

export default Pure_Component
