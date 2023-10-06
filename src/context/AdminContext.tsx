import { createContext } from 'react';
import { TableRestaurant, OrderInProcess} from "../interfaces/interfaces";


interface ContextProps {
	tablesRestaurantActives: TableRestaurant[];
	setTablesRestaurantActives: (description: TableRestaurant[]) => void;
/* 	tablesCallRestaurant: TableRestaurant[];
	setTablesCallRestaurant: (description: TableRestaurant[]) => void; */
	allOrders:  OrderInProcess[];
	setAllOrders: (description:  OrderInProcess[]) => void;
}

export const AdminContext = createContext({} as ContextProps);