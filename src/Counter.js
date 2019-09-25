import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./index.js";

class Counter extends Component {
  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
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

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
