import { useContext } from "react";
import { AdminContext } from "@/context/AdminContext";
import styles from './AdminOrdersActives.module.scss'
import { Order } from "../Order";

export const AdminOrdersActives = () => {

    const { allOrders } = useContext(AdminContext);

   

    return (
        <>
            <h1 className={styles.header}>Ordenes sin entregar</h1>
            <div className={styles.container}>
                {allOrders?.length > 0 ? 
                 allOrders.map((order, i)=> (
                    <Order key={i} order={order} />
                 ))
                : 
                <p>No hay ordenes pendientes de ninguna mesa en este momento.</p>}
            </div>
        </>
    )
}



/*  */