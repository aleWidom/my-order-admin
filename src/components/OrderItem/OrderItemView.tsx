import { ItemMenuInProcess } from "@/interfaces/interfaces"




interface OrderItemProps {
  itemOrder: ItemMenuInProcess;
  handleClickDelivered: any
}

export const OrderItemView = ({ itemOrder, handleClickDelivered }: OrderItemProps) => {
  return (
    <>
      <p>{itemOrder.title}</p>
      <p>Cantidad: {itemOrder.quantity}</p>
      <button onClick={handleClickDelivered} >Registrado</button>
    </>
  )
}
