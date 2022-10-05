import { useState } from "react";

const CodeGenerator = ({ codeTracker, setCodeTracker }) => {
  const [appTracker, setAppTracker] = useState(0);
  const [availableCode, setAvailableCode] = useState(0);

  return (
    <form className="App-code-generator">
      <h4>Total Lines of Code Generated: {codeTracker}</h4>
      <label htmlFor="generate">Generate Code</label>
      <button
        type="button"
        id="generate"
        min="0"
        onClick={(event) => {
          setCodeTracker((currentCode) => {
            const newCodeTotal = (currentCode += 1);
            return newCodeTotal;
          });
          setAvailableCode((currentCode) => {
            const newCodeTotal = (currentCode += 1);
            return newCodeTotal;
          });
        }}
      >
        GENERATE
      </button>
      <label htmlFor="codeAvailable">
        Available Lines of Code: {availableCode}
      </label>
      <label htmlFor="createApp">Total Apps Created: {appTracker}</label>
      <label htmlFor="createApp">Apps Available {appTracker}</label>
      <button
        type="button"
        id="createApp"
        onClick={(event) => {
          if (availableCode >= 100) {
            setAppTracker((currentApps) => {
              const newAppsTotal = (currentApps += 1);
              return newAppsTotal;
            });
            setAvailableCode((currentCode) => {
              const newCodeTotal = (currentCode -= 100);
              return newCodeTotal;
            });
          }
        }}
      >
        CREATE APP
      </button>
    </form>
  );
};
export default CodeGenerator;
