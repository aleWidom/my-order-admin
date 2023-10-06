"use client"
import { useContext } from 'react'
import { AdminContext } from '@/context/AdminContext'
import { ItemMenuInProcess, OrderInProcess } from '@/interfaces/interfaces'
import { OrderItemView } from './OrderItemView'
import { fetchOrderItem, makeDelivered } from '@/services'

interface OrderItemProps {
    itemOrder: ItemMenuInProcess
}

export const OrderItem = ({itemOrder}: OrderItemProps) => {

  const {setAllOrders}= useContext(AdminContext)

  const handleClickDelivered = /* (orderProduct: OrderInProcess) => */ () => {
    console.log("handleCLick")
    //seteo producto como entregado
    makeDelivered()
      .then((response) => {
        if(response !== undefined) {
          console.log(response)
          console.log("oooooa")
        }
      })
      .catch((e) => {
        console.log(e);
        console.log("errrror")
      });

       //vuelvo a buscar las ordenes que están pedidas pero no entregadas
    fetchOrderItem()
    .then((data)=> {
      if(data !== undefined) {
        const dataOrder = [
          {
          numberTable: "026",
          detail: [
            {
              "ItemPeopleInTableID": "85b7c58f-1c91-493a-b8b3-fb1914b85402",
              "orderNumberID": "3dc14252-399f-458e-8711-e4a869130a58",
              "numberTable": "026",
              "quantity": "2",
              "title": "Milanesa de ternera c/papas fritas",
              "id_item": "61",
              "state": "in process"
          },
          {
              "ItemPeopleInTableID": "c2bda926-525c-403e-b475-f0e638b1f645",
              "orderNumberID": "3dc14252-399f-458e-8711-e4a869130a58",
              "numberTable": "026",
              "quantity": "3",
              "title": "Parrillada para 2 o 3 personas c/papas fritas",
              "id_item": "83",
              "state": "in process"
          }
          ]
          },
          {
            numberTable: "021",
            detail: [
              {
                "ItemPeopleInTableID": "2dbf21b5-38d7-4001-beff-859fbdc2b5f9",
                "orderNumberID": "69eef5ac-0054-481e-914e-2df24929ef54",
                "numberTable": "021",
                "quantity": "2",
                "title": "Suprema de pollo a la Maryland c/papas fritas",
                "id_item": "72",
                "state": "in process"
            },
            {
                "ItemPeopleInTableID": "b6364639-90af-4635-b305-b3e70fbafa98",
                "orderNumberID": "69eef5ac-0054-481e-914e-2df24929ef54",
                "numberTable": "021",
                "quantity": "2",
                "title": "Milanesa de ternera c/papas fritas",
                "id_item": "61",
                "state": "in process"
            }
            ]
            }
      ]
      console.log(JSON.stringify(dataOrder))
      setAllOrders(dataOrder); 
      }
    })
    .catch((err)=> {
      console.log(err)
    })  




  }


  return (
    <OrderItemView itemOrder={itemOrder} handleClickDelivered={handleClickDelivered}/>
  )
}



  
    


   




   

