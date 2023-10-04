"use client"; 
import { useState } from 'react';
import { AdminContext } from "./AdminContext";
import { TableRestaurant, OrdersInProcess  } from '../interfaces/interfaces';


interface Props {
	children: JSX.Element | JSX.Element[];
}

export const AdminProvider = ({ children }: Props) => {
	const [tablesRestaurantActives, setTablesRestaurantActives] = useState<TableRestaurant[]>([]);
/* 
	const [tablesCallRestaurant, setTablesCallRestaurant] = useState<TableRestaurant[]>([]); */

	const [orderItem, setOrderItem] = useState<OrdersInProcess[]>([]);

	return (
		<AdminContext.Provider
			value={{
				tablesRestaurantActives,
				setTablesRestaurantActives,
			/* 	tablesCallRestaurant,
				setTablesCallRestaurant, */
				orderItem, 
				setOrderItem
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};