import { OrderInProcess } from '@/interfaces/interfaces';
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


async function updateTableNumberDesactiveTable(peopleInTableID: string, numberTable: string, allOrders: OrderInProcess[]) {
	try {
		alert(`Mesa ${numberTable} desactivada correctamente.`)

		if (allOrders.length) {
			const response = await fetch(

				/*or get*/ `https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables/${peopleInTableID}?desactivate`, /* { cache: 'no-store' } */
			);
			const data = await response.json()

			return data
		} else {
			const response = await fetch(

				/*or get*/ `https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables/${peopleInTableID}?desactivateWihtOutOrder`, /* { cache: 'no-store' } */
			);
			const data = await response.json()

			return data
		}

	} catch (err) {
		alert("Error vuelva a intentarlo.")
		console.log(err);
	}
}


async function updateTableNumberNotCall(tableID: string | undefined, numberTable: string) {
	alert(`Se ha cancelado correctamente el llamado de la Mesa: ${numberTable}`)
	try {
		const response = await axios.put(
			/*or get*/ `https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables/?notCall=${tableID}`
		);
		return response.data;
	} catch (err) {
		alert("Ocurrio un error. Vuelva a intentarlo.")
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

async function peopleInTableDischarge(peopleInTable: string) {
	try {
		const response = await fetch(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables?peopleInTableDischarge=${peopleInTable}`, { cache: 'no-store' });
		const data = await response.json()

		return data
	} catch (err) {
		console.log(err);
	}
}

export {
	fetchOrderItem,
	fetchTablesActive,
	makeRegistered,
	updateTableNumberDesactiveTable,
	updateTableNumberNotCall,
	resetAllTables,
	peopleInTableDischarge
};


