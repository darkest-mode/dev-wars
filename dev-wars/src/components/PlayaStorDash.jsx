import { useEffect } from "react";
import { useState } from "react";

const PlayaStorDash = ({
  appsUploaded,
  setAppsUploaded,
  appsDownloaded,
  setAppsDownloaded,
}) => {
  const [downloadsPerApp, setDownloadsPerApp] = useState(0);
  const [downloadsPerMinute, setDownloadsPerMinute] = useState(0);

  let interval = 1000;

  useEffect(() => {
    while (appsUploaded > 0) {
      const timer = setInterval(() => {
        setDownloadsPerMinute((currentDownloads) => {
          const newDownloadsTotal = (currentDownloads += 1);
          return newDownloadsTotal;
        });
      }, interval);
      return () => clearInterval(timer);
    }
  }, [appsUploaded]);

  return (
    <form>
      <label htmlFor="AppsInStore">Apps in PlayaStor: {appsUploaded}</label>
      <label htmlFor="DownloadsPerApp">
        Downloads per App: {downloadsPerApp}
      </label>
      <label htmlFor="DownloadsPerMinute">
        Downloads per Minute: {downloadsPerMinute}
      </label>
      <button>Hello</button>
    </form>
  );
};

export default PlayaStorDash;
