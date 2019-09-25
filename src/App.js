import React from "react";
import Counter from "./Counter";
import "./App.css";

const App = () => {
  return (
    <div className="container-outer">
      <Counter count={42} />
    </div>
  );
};

export default App;
