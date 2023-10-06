export interface TableRestaurant {
	TableID: string;
	table_number: string;
	table_active: string;
	table_call: string;
}

export interface OrderInProcess {
	numberTable: string;
	detail: ItemMenuInProcess[]
} 

export interface ItemMenuInProcess {
	ItemPeopleInTableID: string;
	orderNumberID: string;
	numberTable: string;
	title: string;
	quantity: string;
	state: string;
	id_item: string;
}

