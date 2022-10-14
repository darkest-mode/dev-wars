import { useState } from 'react';

const PlayaStor = ({
	appsUploaded,
	setAppsUploaded,
	availableApps,
	setAvailableApps,
}) => {
	return (
		<>
			<label htmlFor='createApp'>Apps in PlayaStor: {appsUploaded}</label>
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
		</>
	);
};

export default PlayaStor;
