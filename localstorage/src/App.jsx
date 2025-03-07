import React from "react";
import Counter from "./Counter";
import CommentSection from "./Comment";

const App = () => {
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <CommentSection/>
    </div>
  );
};

export default App;
