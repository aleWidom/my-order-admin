"use client"; 
import { useState } from 'react';
import { AdminContext } from "./AdminContext";
import { TableRestaurant, OrderInProcess } from '../interfaces/interfaces';


interface Props {
	children: JSX.Element | JSX.Element[];
}

export const AdminProvider = ({ children }: Props) => {
	const [tablesRestaurantActives, setTablesRestaurantActives] = useState<TableRestaurant[]>([]);
/* 
	const [tablesCallRestaurant, setTablesCallRestaurant] = useState<TableRestaurant[]>([]); */

	const [allOrders, setAllOrders] = useState<OrderInProcess[]>([
			{
			  numberTable: "021",
			  detail: [
				{
				  "ItemPeopleInTableID": "2dbf21b5-38d7-4001-beff-859fbdc2b5f9",
				  "orderNumberID": "69eef5ac-0054-481e-914e-2df24929ef54",
				  "numberTable": "021",
				  "quantity": "2",
				  "title": "Suprema de pollo a la Maryland c/papas fritas",
				  "id_item": "72",
				  "state": "in process"
			  },
			  {
				  "ItemPeopleInTableID": "b6364639-90af-4635-b305-b3e70fbafa98",
				  "orderNumberID": "69eef5ac-0054-481e-914e-2df24929ef54",
				  "numberTable": "021",
				  "quantity": "2",
				  "title": "Milanesa de ternera c/papas fritas",
				  "id_item": "61",
				  "state": "in process"
			  }
			  ]
			  }
		]
	);

	return (
		<AdminContext.Provider
			value={{
				tablesRestaurantActives,
				setTablesRestaurantActives,
			/* 	tablesCallRestaurant,
				setTablesCallRestaurant, */
				allOrders, 
				setAllOrders
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};