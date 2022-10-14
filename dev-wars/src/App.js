import { useState } from "react";

import CodeGenerator from "./components/CodeGenerator.jsx";
import Header from "./components/Header.jsx";

import "./App.css";

function App() {
  const [appsUploaded, setAppsUploaded] = useState(0);
  const [appsDownloaded, setAppsDownloaded] = useState(0);
  const [codeTracker, setCodeTracker] = useState(0);

  return (
    <div className="App">
      <Header />
      <CodeGenerator
        codeTracker={codeTracker}
        setCodeTracker={setCodeTracker}
        appsUploaded={appsUploaded}
        setAppsUploaded={setAppsUploaded}
        appsDownloaded={appsDownloaded}
        setAppsDownloaded={setAppsDownloaded}
      />
    </div>
  );
}

export default App;
