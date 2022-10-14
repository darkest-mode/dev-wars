const PlayaStorDash = ({ appsUploaded, setAppsUploaded }) => {
  return (
    <form>
      <label htmlFor="AppsInStore">Apps in PlayaStor: {appsUploaded}</label>
      <label htmlFor="DownloadsPerApp">Downloads per App: {appsUploaded}</label>
      <label htmlFor="DownloadsPerMinute">
        Downloads per Minute: {appsUploaded}
      </label>
    </form>
  );
};

export default PlayaStorDash;
