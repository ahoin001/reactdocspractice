import React from "react";
import { Button } from "./Button";

const ButtonContainer = (props) => {
  return (
    <>
      <header className="App-header">
        <div className="ButtonContainer-header">
          <p>This is a container with the button component</p>
          <Button buttonText={props.buttonText} />
        </div>
      </header>
    </>
  );
};

export default ButtonContainer;
