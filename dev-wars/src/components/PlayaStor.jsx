import PlayaStorDash from "./PlayaStorDash";

const PlayaStor = ({
  appsUploaded,
  setAppsUploaded,
  availableApps,
  setAvailableApps,
  appsDownloaded,
  setAppsDownloaded,
}) => {
  return (
    <form>
      <label htmlFor="AllTimeDownloads">
        All Downloads Ever: {appsDownloaded}
      </label>
      <button
        type="button"
        id="uploadApp"
        onClick={(event) => {
          if (availableApps >= 1) {
            setAppsUploaded((currentUploads) => {
              const newUploadsTotal = (currentUploads += 1);
              return newUploadsTotal;
            });
            setAvailableApps((currentApps) => {
              const newAppsTotal = (currentApps -= 1);
              return newAppsTotal;
            });
          }
        }}
      >
        UPLOAD APP TO PLAYASTOR
      </button>
      <PlayaStorDash
        appsUploaded={appsUploaded}
        setAppsUploaded={setAppsUploaded}
        appsDownloaded={appsDownloaded}
        setAppsDownloaded={setAppsDownloaded}
      />
    </form>
  );
};

export default PlayaStor;
