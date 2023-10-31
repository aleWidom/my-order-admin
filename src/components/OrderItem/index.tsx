"use client"
import { useContext } from 'react'
import { AdminContext } from '@/context/AdminContext'
import { ItemMenuInProcess, OrderInProcess } from '@/interfaces/interfaces'
import { OrderItemView } from './OrderItemView'
import { fetchOrderItem, makeDelivered } from '@/services'

interface OrderItemProps {
  itemOrder: ItemMenuInProcess
}

export const OrderItem = ({ itemOrder }: OrderItemProps) => {

  const { setAllOrders } = useContext(AdminContext)

  const handleClickDelivered = (itemIdOrder: any) => () => {
    //seteo producto como entregado
    console.log(itemIdOrder)
    makeDelivered(itemIdOrder)
      .then((response) => {
        if (response !== undefined) {
          fetchOrderItem()
            .then((data) => {
              if (data !== undefined) {
                setAllOrders(data);
              }
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
    fetchOrderItem()
      .then((data) => {
        if (data !== undefined) {
          setAllOrders(data);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <OrderItemView itemOrder={itemOrder} handleClickDelivered={handleClickDelivered} />
  )
}














