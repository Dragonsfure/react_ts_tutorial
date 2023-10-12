import React, { MouseEvent, useState } from "react";

interface IAppProps {}

const Home: React.FunctionComponent<IAppProps> = (props) => {
    //gets an array of the instance and a function to change the instance 
  let [clickVal, updateValue] = useState(0);
  const OnClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");
    updateValue(++clickVal);
    console.log( clickVal);
  };

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <button onClick={OnClick}>Click me</button>
      <p>Button clicked: {clickVal} </p>
    </div>
  );
};

export default Home;
