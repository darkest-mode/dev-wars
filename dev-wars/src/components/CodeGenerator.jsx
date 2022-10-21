import { useState } from 'react';
import PlayaStor from './PlayaStor';
import Tracker from './Tracker';

const CodeGenerator = ({
	codeTracker,
	setCodeTracker,
	appsUploaded,
	setAppsUploaded,
	appsDownloaded,
	setAppsDownloaded,
}) => {
	const [appTracker, setAppTracker] = useState(0);
	const [availableApps, setAvailableApps] = useState(0);
	const [availableCode, setAvailableCode] = useState(0);

	return (
		<>
			{/* <div>
				<h2 className='App-code-tracker'>
					Lines of Code: {codeTracker}
				</h2>
			</div> */}
			<Tracker
				codeTracker={codeTracker}
				appTracker={appTracker}
				appsUploaded={appsUploaded}
				appsDownloaded={appsDownloaded}
			/>
			<form className='App-code-generator'>
				<label htmlFor='generate'>Generate Code</label>
				<button
					type='button'
					id='generate'
					min='0'
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
				<label htmlFor='codeAvailable'>
					Available Lines of Code: {availableCode}
				</label>
				<label htmlFor='createApp'>
					Total Apps Created: {appTracker}
				</label>
				<label htmlFor='createApp'>
					Apps Available: {availableApps}
				</label>
				<button
					type='button'
					id='createApp'
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
							setAvailableApps((currentApps) => {
								const newAppsTotal = (currentApps += 1);
								return newAppsTotal;
							});
						}
					}}
				>
					CREATE APP
				</button>
				{/* <PlayaStor
        appsUploaded={appsUploaded}
        setAppsUploaded={setAppsUploaded}
        availableApps={availableApps}
        setAvailableApps={setAvailableApps}
        appsDownloaded={appsDownloaded}
        setAppsDownloaded={setAppsDownloaded}
      /> */}
				<button
					type='button'
					id='uploadApp'
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
