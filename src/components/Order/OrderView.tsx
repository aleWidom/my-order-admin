import { OrderInProcess } from "@/interfaces/interfaces"
import { OrderItem } from "../OrderItem"
import styles from './OrderView.module.scss'

interface OrderViewProps {
  order: OrderInProcess
}

export const OrderView = ({ order }: OrderViewProps) => {

  return (
    <div className={styles.containerOrder}>
      <h2>{order.numberTable}</h2>
      {order.detail.map((itemOrder) => (
        <OrderItem key={itemOrder.ItemPeopleInTableID} itemOrder={itemOrder} />
      ))}
    </div>
  )
}
