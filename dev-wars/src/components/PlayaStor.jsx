import { useEffect } from 'react';
import { useState } from 'react';

const PlayaStor = ({
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
				setAppsDownloaded((currentDownloads) => {
					const newDownloadsTotal = (currentDownloads +=
						appsUploaded);
					return newDownloadsTotal;
				});
			}, interval);
			return () => clearInterval(timer);
		}
	}, [appsUploaded]);

	return (
		<form className='App-playastor'>
			<label htmlFor='AppsInStore'>
				Apps in PlayaStor: {appsUploaded}
			</label>

			<label htmlFor='DownloadsPerApp'>
				Downloads per App: {downloadsPerApp}
			</label>

			<label htmlFor='DownloadsPerMinute'>
				Downloads per Minute: {appsUploaded}
			</label>
		</form>
	);
};

export default PlayaStor;
