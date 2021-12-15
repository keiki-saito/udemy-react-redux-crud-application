import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "Keiki", age: 100 },
    { name: "John", age: 90 },
    { name: "NoName", age: 3},
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
