import React, { Component } from "react";

class Counter extends Component {
//   state = { count: 0 };

  increment = () => {
    // console.log("Adding one.");
    // this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    // console.log("Subtracting one.");
    // this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="container-inner">
        <button onClick={this.increment}>Add One</button>
        <h1>{this.props.count}</h1>
        <button onClick={this.decrement}>Subtract One</button>
      </div>
    );
  }
}

export default Counter;
