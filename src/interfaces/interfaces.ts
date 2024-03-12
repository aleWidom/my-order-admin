export interface TableRestaurant {
	PeopleInTableID: string;
	TableID: string;
	table_number: string;
	table_active: string;
	table_call: string;
}

export interface OrderInProcess {
	orderNumberID?: string;
	numberTable: string;
	id_peopleInTable?: string;
	date?: string;
	details: ItemMenuInProcess[];
}

export interface ItemMenuInProcess {
	id_item: string;
	quantity: string;
	ItemPeopleInTableID: string;
	title: string;
}

