import { useState } from 'react';

import Advertising from './components/Advertising.jsx';
import CodeGenerator from './components/CodeGenerator.jsx';
import Header from './components/Header.jsx';
import Tracker from './components/Tracker.jsx';

import './App.css';

function App() {
	const [appsUploaded, setAppsUploaded] = useState(0);
	const [appsDownloaded, setAppsDownloaded] = useState(0);
	const [codeTracker, setCodeTracker] = useState(0);
	const [appTracker, setAppTracker] = useState(0);

	return (
		<div className="App">
			<Header />
			<Tracker
				codeTracker={codeTracker}
				appTracker={appTracker}
				appsUploaded={appsUploaded}
				appsDownloaded={appsDownloaded}
			/>
			<CodeGenerator
				setCodeTracker={setCodeTracker}
				appsUploaded={appsUploaded}
				setAppsUploaded={setAppsUploaded}
				appsDownloaded={appsDownloaded}
				setAppsDownloaded={setAppsDownloaded}
				appTracker={appTracker}
				setAppTracker={setAppTracker}
			/>
			{appsUploaded > 0 && (
				<Advertising appsDownloaded={appsDownloaded} />
			)}
		</div>
	);
}

export default App;
