import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';

const Advertising = ({ appsDownloaded }) => {
	const gameDevelopers = {
		analogueCrafts: [21, 2100000000],
		nineTenGo: [13, 130000000],
		ubinerd: [8, 8000000],
		sunnyInteractiveAmusement: [5, 500000],
		passightTsunami: [3, 30000],
		averageGames: [2, 2000],
		toyAttic: [1, 100],
		quadraticPhoenix: [1, 10],
	};

	const [unlockAnalogueCrafts, setUnlockAnalogueCrafts] = useState(false);
	const [unlockNineTenGo, setUnlockNineTenGo] = useState(false);
	const [unlockUbinerd, setUnlockUbinerd] = useState(false);
	const [
		unlockSunnyInteractiveAmusement,
		setUnlockSunnyInteractiveAmusement,
	] = useState(false);
	const [unlockPassightTsunami, setUnlockPassightTsunami] = useState(false);
	const [unlockAverageGames, setUnlockAverageGames] = useState(false);
	const [unlockToyAttic, setUnlockToyAttic] = useState(false);
	const [unlockQuadraticPhoenix, setUnlockQuadraticPhoenix] = useState(false);

	useEffect(() => {
		if (appsDownloaded >= gameDevelopers.analogueCrafts[1]) {
			setUnlockAnalogueCrafts(true);
		}
		if (appsDownloaded >= gameDevelopers.nineTenGo[1]) {
			setUnlockNineTenGo(true);
		}
		if (appsDownloaded >= gameDevelopers.ubinerd[1]) {
			setUnlockUbinerd(true);
		}
		if (appsDownloaded >= gameDevelopers.sunnyInteractiveAmusement[1]) {
			setUnlockSunnyInteractiveAmusement(true);
		}
		if (appsDownloaded >= gameDevelopers.passightTsunami[1]) {
			setUnlockPassightTsunami(true);
		}
		if (appsDownloaded >= gameDevelopers.averageGames[1]) {
			setUnlockAverageGames(true);
		}
		if (appsDownloaded >= gameDevelopers.toyAttic[1]) {
			setUnlockToyAttic(true);
		}
		if (appsDownloaded >= gameDevelopers.quadraticPhoenix[1]) {
			setUnlockQuadraticPhoenix(true);
		}
	}, [appsDownloaded]);

	return (
		<>
			<form className="App-advertising">
				<label>DISPLAY ADS IN GAME FOR:</label>

				<button
					type="button"
					disabled={!unlockQuadraticPhoenix}
					id="quadraticPhoenix"
					onClick={() => {
						console.log('clicked');
					}}
				>
					Quadratic Phoenix
				</button>

				<button type="button" id="toyAttic" disabled={!unlockToyAttic}>
					ToyAttic
				</button>

				<button
					type="button"
					id="averageGames"
					disabled={!unlockAverageGames}
				>
					Average Games
				</button>

				<button
					type="button"
					id="passightTsunami"
					disabled={!unlockPassightTsunami}
				>
					Passight Tsunami
				</button>

				<button
					type="button"
					id="sunnyInteractiveAmusement"
					disabled={!unlockSunnyInteractiveAmusement}
				>
					Sunny Interactive Amusement
				</button>

				<button type="button" id="ubinerd" disabled={!unlockUbinerd}>
					Ubinerd
				</button>

				<button
					type="button"
					id="nineTenGo"
					disabled={!unlockNineTenGo}
				>
					Nine-Ten-Go
				</button>

				<button
					type="button"
					id="analogueCrafts"
					disabled={!unlockAnalogueCrafts}
				>
					Analogue Crafts
				</button>
			</form>
		</>
	);
};

export default Advertising;
