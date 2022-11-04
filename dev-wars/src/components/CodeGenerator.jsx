import { useState } from 'react';

import PlayaStor from './PlayaStor';

const CodeGenerator = ({
	setCodeTracker,
	appsUploaded,
	setAppsUploaded,
	appsDownloaded,
	setAppsDownloaded,
	appTracker,
	setAppTracker,
}) => {
	const [availableApps, setAvailableApps] = useState(0);
	const [availableCode, setAvailableCode] = useState(0);

	const codeForApp = 10;

	return (
		<>
			<form className="App-code-generator">
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
				<label htmlFor="createApp">
					Total Apps Created: {appTracker}
				</label>
				<label htmlFor="createApp">
					Apps Available: {availableApps}
				</label>
				<button
					type="button"
					id="createApp"
					onClick={(event) => {
						if (availableCode >= codeForApp) {
							setAppTracker((currentApps) => {
								const newAppsTotal = (currentApps += 1);
								return newAppsTotal;
							});
							setAvailableCode((currentCode) => {
								const newCodeTotal = (currentCode -=
									codeForApp);
								return newCodeTotal;
							});
							setAvailableApps((currentApps) => {
								const newAppsTotal = (currentApps += 1);
								return newAppsTotal;
							});
						}
					}}
				>
					CREATE APP
				</button>
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
			</form>
			<div>
				<PlayaStor
					appsUploaded={appsUploaded}
					setAppsUploaded={setAppsUploaded}
					availableApps={availableApps}
					setAvailableApps={setAvailableApps}
					appsDownloaded={appsDownloaded}
					setAppsDownloaded={setAppsDownloaded}
				/>
			</div>
		</>
	);
};
export default CodeGenerator;
