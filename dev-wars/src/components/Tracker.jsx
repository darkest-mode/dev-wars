const Tracker = ({ codeTracker, appTracker, appsUploaded, appsDownloaded }) => {
	return (
		<>
			<div className='App-code-tracker'>
				<h2>Lines of Code: {codeTracker}</h2>
				<h2>Apps Created: {appTracker}</h2>
				<h2>Apps Uploaded: {appsUploaded}</h2>
				<h2>Apps Downloaded: {appsDownloaded}</h2>
			</div>
		</>
	);
};

export default Tracker;
