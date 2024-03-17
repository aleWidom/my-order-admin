"use client"
import { useContext } from "react";
import { AdminContext } from "@/context/AdminContext";
import { Order } from "../Order";
import styles from './AdminOrdersActives.module.scss'

export const AdminOrdersActives = () => {

    const { allOrders } = useContext(AdminContext);

    return (
        <>
            <h2 className={styles.header}>Órdenes Recibidas</h2>
            <div className={styles.container}>
                {allOrders?.length > 0 ?
                    allOrders.map((order, i) => (
                        <Order key={i} order={order} />
                    ))
                    :
                    <p>No hay órdenes pendientes de ninguna mesa en este momento.</p>}
            </div>
        </>
    )
}
