import React from "react";

const App = () => {
  const profiles = [
    { name: "Keiki", age: 100 },
    { name: "John", age: 90 },
    { name: "NoName"},
  ];
  return (
    <React.Fragment>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </React.Fragment>
  );
};

const User = (props) => {
  return (
    <div>
      Hi,I am {props.name}! and {props.age} years old!
    </div>
  );
};
User.defaultProps = {
  age:1
}

export default App;
