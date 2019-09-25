import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";

const initialState = { count: 0 };

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
    return { type: DECREMENT };
  }

function reducer(state = initialState, action) {
  console.log("reducer here ", action);
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log("Created", store.getState());
console.log("Done", store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <div className="container-outer">
        <Counter count={42} />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
