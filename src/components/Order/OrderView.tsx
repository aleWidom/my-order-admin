import { OrderInProcess } from "@/interfaces/interfaces"
import { OrderItem } from "../OrderItem"
import styles from './OrderView.module.scss'

interface OrderViewProps {
  order: any
}

export const OrderView = ({ order }: OrderViewProps) => {

  return (
    <div className={styles.containerOrder}>
      <h2 className={styles.table}>Mesa {order.numberTable}</h2>
      {JSON.parse(order.details).map((itemOrder: any) => (
        <OrderItem key={itemOrder.ItemPeopleInTableID} itemOrder={itemOrder} />
      ))}
    </div>
  )
}
