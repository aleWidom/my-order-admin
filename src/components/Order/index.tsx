import { OrderInProcess } from '@/interfaces/interfaces'
import { OrderView } from './OrderView'


interface OrderProps  {
    order: OrderInProcess
}

export const Order= ({order}: OrderProps) => { 
  return (
    <OrderView order={order}/>
  )
}
