import axios from 'axios';


async function fetchOrderItem() {
	try {
		const response = await fetch(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables?allOrdersInProcess`,
			{ cache: 'no-store' });
		const data = await response.json()

		return data

	} catch (err) {
		console.log(err);
	}
}

async function fetchTablesActive() {
	try {
		const response = await axios.get(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables?active`);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


async function makeRegistered(orderNumberID: string) {
	console.log(orderNumberID)
	try {
		const makeDelivered = await axios.post(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/items/${orderNumberID}?makeRegistered`);
		return makeDelivered;
	} catch (err) {
		console.log(err);
	}
}


async function updateTableNumberDesactive(tableID: string) {
	try {
		const response = await axios.put(
			/*or get*/ `https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables/?desactivate=${tableID}`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}

async function updateTableNumberNotCall(tableID: string | undefined) {
	try {
		const response = await axios.put(
			/*or get*/ `https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables/?notCall=${tableID}`
		);
		return response.data;
	} catch (err) {
		console.log(err);
	}
}


export {
	fetchOrderItem,
	fetchTablesActive,
	makeRegistered,
	updateTableNumberDesactive,
	updateTableNumberNotCall
};
