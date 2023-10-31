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

	const [allOrders, setAllOrders] = useState<OrderInProcess[]>([]);

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