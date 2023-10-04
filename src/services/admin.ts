import axios from 'axios';


async function fetchOrderItem() {
	try {
		const response = await axios.get(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/tables?itemPeopleInTableJoin`);
		return response.data;

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


async function makeDelivered(idItemPeopleInTable: string | undefined) {
	try {
		const  makeDelivered = await axios.post(`https://wt15fjaub7.execute-api.us-east-1.amazonaws.com/dev/items/${idItemPeopleInTable}?makeDelivered`);
		return  makeDelivered;
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
	makeDelivered,
	updateTableNumberDesactive,
	updateTableNumberNotCall
};
