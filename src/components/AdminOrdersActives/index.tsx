import { useContext } from "react";
import { AdminContext } from "@/context/AdminContext";
import { fetchOrderItem } from "../../services/admin";
import { makeDelivered } from "@/services/admin"
import { OrdersInProcess  } from "@//interfaces/interfaces";
import styles from './AdminOrdersActives.module.scss'

export const AdminOrdersActives = () => {

    const { orderItem, setOrderItem } = useContext(AdminContext);

    const handleClickDelivered = (orderProduct: OrdersInProcess) => () => {

        //seteo producto como entregado
   /*      makeDelivered(orderProduct.ItemID) */

        //vuelvo a buscar las ordenes que están pedidas pero no entregadas
        fetchOrderItem()
            .then((data) => {
                if (data !== undefined) {
                    setOrderItem(data);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <>
            <h1 className={styles.header}>Ordenes sin entregar</h1>
            <div className={styles.container}>
                {orderItem?.length > 0 ?
                    orderItem.map((e, i) => (
                        <div key={i}>
                            <h4 className={styles.table}>Table: {e.numberTable}</h4>
                            <h4 className={styles.title}>{e.title}</h4>
                            <h4 className={styles.description}>Cantidad: {e.quantity}</h4>
                            <button onClick={handleClickDelivered(e)}>Marcar como entregado.</button>
                        </div>
                    )) :
                    <p>No hay ordenes pendientes de ninguna mesa en este momento.</p>}
            </div>
        </>
    )
}
