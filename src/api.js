/**
 * @concept FAKE API
 * @context
 * This is a fake api created with fetch() calls to a local sever on port 3001
 * ----------------------------------------------------------------
 * @concept FAKE SERVER
 * @context
 * This server was created with a node function that cread a json Db. Then consumed with json-server dependency
 * #################################
 * @context
 * To seed the db a script was created on package.json that call the seed.js file on server folder.
 * @tst >"seed": "node server/seed.js",
 * @context
 * To deploy the SPA the react start script was converted to client
 * @tst >"client": "react-scripts start",
 * @context
 * To deploy the fake server a script called server was created
 * @tst >"server": "json-server --port 3001 --watch server/db.json",
 * @context
 * The start script was modified to run both server and SPA deploy
 * @tst >"start": "npm-run-all -p client server",
 */

const BASE_URL = 'http://localhost:3001';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
	delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
	await simulateNetworkLatency();

	options.headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};

	const url = BASE_URL + endpoint;
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
}

const api = {
	badges: {
		list() {
			return callApi('/badges');
		},
		create(badge) {
			// throw new Error('500: Server error');
			return callApi(`/badges`, {
				method: 'POST',
				body: JSON.stringify(badge),
			});
		},
		read(badgeId) {
			return callApi(`/badges/${badgeId}`);
		},
		update(badgeId, updates) {
			return callApi(`/badges/${badgeId}`, {
				method: 'PUT',
				body: JSON.stringify(updates),
			});
		},
		// Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
		remove(badgeId) {
			return callApi(`/badges/${badgeId}`, {
				method: 'DELETE',
			});
		},
	},
};

export default api;
