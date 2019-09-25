import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import "./index.css";

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  console.log("reducer here ", action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
  //   return state;
}

const store = createStore(reducer);

console.log("Created", store.getState());
store.dispatch({ type: "INCREMENT" });
console.log("Done", store.getState());

const App = () => {
  return (
    <div className="container-outer">
      <Counter count={42} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
