export interface TableRestaurant {
	TableID: string;
	table_number: string;
	table_active: string;
	table_call: string;
}

export interface OrdersInProcess {
	ItemPeopleInTableID: string;
	orderNumberID: string;
	numberTable: string;
	title: string;
	quantity: string;
	state: string;
	id_item: string;
}

