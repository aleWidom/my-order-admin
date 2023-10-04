import { createContext } from 'react';
import { TableRestaurant, OrdersInProcess } from "../interfaces/interfaces";


interface ContextProps {
	tablesRestaurantActives: TableRestaurant[];
	setTablesRestaurantActives: (description: TableRestaurant[]) => void;
/* 	tablesCallRestaurant: TableRestaurant[];
	setTablesCallRestaurant: (description: TableRestaurant[]) => void; */
	orderItem: OrdersInProcess  [];
	setOrderItem: (description: OrdersInProcess []) => void;
}

export const AdminContext = createContext({} as ContextProps);