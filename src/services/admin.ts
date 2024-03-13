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
		const response = await fetch(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables?active`, { cache: 'no-store' });
		const data = await response.json()

		return data
	} catch (err) {
		console.log(err);
	}
}


async function makeRegistered(orderNumberID: string) {
	try {
		const makeDelivered = await fetch(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/items/${orderNumberID}?makeRegistered`,
			{ cache: 'no-store' });
		const data = await makeDelivered.json()

		return data
	} catch (err) {
		console.log(err);
	}
}


async function updateTableNumberDesactive(peopleInTableID: string) {
	try {
		alert("Desactivado correctamente")
		const response = await fetch(
			/*or get*/ `https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables/${peopleInTableID}?desactivate`, { cache: 'no-store' }
		);
		const data = await response.json()

		return data
	} catch (err) {
		alert("Error vuelva a intentarlo")
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

async function resetAllTables() {
	try {
		alert("Ha desactivado todas las mesas correctamente.")
		const response = await fetch(
			`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables?resetAllTables`, { cache: 'no-store' }
		);
		const data = await response.json()

		return data
	} catch (err) {
		alert("Ocurrio un error. Vuelva a intentarlo.")
		console.log(err);
	}
}

export {
	fetchOrderItem,
	fetchTablesActive,
	makeRegistered,
	updateTableNumberDesactive,
	updateTableNumberNotCall,
	resetAllTables
};


