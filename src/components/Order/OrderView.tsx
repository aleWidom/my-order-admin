import { useContext } from "react"
import { AdminContext } from "@/context/AdminContext"
import { fetchOrderItem, makeRegistered } from "@/services"
import styles from './OrderView.module.scss'

interface OrderViewProps {
  order: any
}

export const OrderView = ({ order }: OrderViewProps) => {

  const { setAllOrders } = useContext(AdminContext)

  const handleClickRegister = (orderID: any) => () => {
    //seteo producto como registrado
    makeRegistered(orderID)
      .then((response) => {
        if (response !== undefined) {
          fetchOrderItem()
            .then((data) => {
              if (data !== undefined) {
                setAllOrders(data);
              }
              alert(`Mesa ${order.numberTable}. ${order.title}, Cantidad: ${order.quantity}u. Registrado correctamente:`)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Ha ocurrido un error vuelva a marcar al item como registrado en el sistema.")
      });

    //vuelvo a buscar las ordenes que están pedidas pero no entregadas
    /*   fetchOrderItem()
        .then((data) => {
          if (data !== undefined) {
            setAllOrders(data);
          }
        })
        .catch((err) => {
          console.log(err)
        }) */
  }


  return (
    <div className={styles.containerOrder}>
      <h2 className={styles.table}>Mesa {order.numberTable}</h2>
      <div className={styles.table}>
        <h4>ID Orden:</h4>
        <p> {order.OrderNumberID}</p>
      </div>
      <div className={styles.table}>
        <h4>ID Mesa PeopleInTable:</h4>
        <p> {order.id_peopleInTable}</p>
      </div>
      <p className={styles.title}>{order.title}</p>
      <p>Cantidad: {order.quantity}</p>
      <button onClick={handleClickRegister(order.OrderNumberID)} className={styles.buttonRegisterItemOrder}>Registrar.</button>
    </div>
  )
}





