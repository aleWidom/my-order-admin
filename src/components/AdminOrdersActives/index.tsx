import { useContext } from "react";
import { AdminContext } from "@/context/AdminContext";
import { fetchItemPeopleInTable} from "../../services/admin";
import {makeDelivered } from "@/services/admin"
import { PlateSelected } from "@//interfaces/interfaces";
import styles from './AdminOrdersActives.module.scss'

export const AdminOrdersActives = () => {

    const { orderItem, setOrderItem } = useContext(AdminContext);

    const handleClickDelivered = (orderProduct: PlateSelected) => () => {

		//seteo producto como entregado
	 	makeDelivered(orderProduct.ItemID)  

		//vuelvo a buscar las ordenes que están pedidas pero no entregadas
		fetchItemPeopleInTable("07d29644-4582-444c-9459-5d59705dfef0")
			.then((data) => {
				if(data) {
                    return setOrderItem(data);
                }
			})
			.catch((err) => {
				console.log(err);
                
			});
	}

    return (
        <>
          <h1 className={styles.header}>Ordenes sin entregar</h1>
            <div className={styles.container}>
            <h4 className={styles.table}>Table: {"26"}</h4>
                {orderItem.length > 0 ?
                    orderItem.map((e,i) => (
                        <div key={i}>
                            <h4 className={styles.title}>{e.title}</h4>
                            <h4 className={styles.description}>Cantidad: {e.quantity}</h4>
                            <button onClick={handleClickDelivered(e)}>Marcar como entregado.</button>
                        </div>
                    )) :
                    'No hay ordenes pendientes de ninguna mesa en este momento.'}
            </div>
        </>
    )
}
