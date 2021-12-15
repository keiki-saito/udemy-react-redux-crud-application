import React from "react";

const App = () => {
  return (
    <React.Fragment>
      {/* <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}} /> */}
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
