import CodeGenerator from "./CodeGenerator.jsx";
// import { useState } from "react";

const Header = ({ codeTracker, setCodeTracker }) => {
  return (
    <div>
      <h1 className="App-header">DevWars!!!1!</h1>
      <CodeGenerator codeTracker={ codeTracker } setCodeTracker={ setCodeTracker }/>
    </div>
  );
};

export default Header;
