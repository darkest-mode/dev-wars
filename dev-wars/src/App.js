import { useState } from "react";

import CodeGenerator from "./components/CodeGenerator.jsx";
import Header from "./components/Header.jsx";

import "./App.css";

function App() {
  const [codeTracker, setCodeTracker] = useState(0);

  return (
    <div className="App">
      <Header />
      <CodeGenerator
        codeTracker={codeTracker}
        setCodeTracker={setCodeTracker}
      />
    </div>
  );
}

export default App;
