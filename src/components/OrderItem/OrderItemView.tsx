import { ItemMenuInProcess } from "@/interfaces/interfaces"
import styles from './OrderItemView.module.scss'

interface OrderItemProps {
  itemOrder: ItemMenuInProcess;
  handleClickDelivered: any
}

export const OrderItemView = ({ itemOrder, handleClickDelivered }: OrderItemProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{itemOrder.title}</p>
      <p>Cantidad: {itemOrder.quantity}</p>
      <button onClick={handleClickDelivered(itemOrder.ItemPeopleInTableID)} className={styles.buttonRegisterItemOrder}>Registrado en sistema.</button>
    </div>
  )
}
