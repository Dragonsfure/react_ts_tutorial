import { click } from "@testing-library/user-event/dist/click";
import React, { MouseEvent, useState } from "react";

interface IAppProps {}

const Home: React.FunctionComponent<IAppProps> = (props) => {
  const [clickVal, updateval] = useState({ value:  0});

  const OnClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");
    updateval({
      value: (++(clickVal.value as number)),
    });
    console.log( clickVal.value);
  };

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <button onClick={OnClick}>Click me</button>
      <p>Button clicked: {clickVal.value} </p>
    </div>
  );
};

export default Home;
