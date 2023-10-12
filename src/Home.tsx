import React, { MouseEvent, useEffect, useState } from "react";

interface IAppProps {}

const Home: React.FunctionComponent<IAppProps> = (props) => {
    //gets an array of the instance and a function to change the instance 
  const [clickVal, updateValue] = useState<number>(0);
  useEffect( () => { console.log(clickVal) }, [clickVal] ) 

  const OnClick = (e: MouseEvent<HTMLButtonElement>) => {
    //console.log("clicked");
    updateValue(clickVal + 1);
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
