"use client";
import { useContext, useEffect } from "react";
import {
  AdminOrdersActives,
  AdminTablesActives,
} from "@/components/index";
import { AdminContext } from "@/context/AdminContext";
import { fetchItemPeopleInTable, fetchTablesActive } from "@/services/admin";

const HomePage = () => {

  const { tablesRestaurantActives, orderItem, setTablesRestaurantActives, setOrderItem } = useContext(AdminContext);

  useEffect(() => {
    //Busco todas las ordenes que no esten entregadas
    fetchItemPeopleInTable("07d29644-4582-444c-9459-5d59705dfef0")
      .then((data) => {
        if (data) {
          setOrderItem(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("useEffect")
    //Busco las mesas activas
    fetchTablesActive()
      .then((data) => {
        if (data) {
          setTablesRestaurantActives(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  console.log(orderItem)

  return (
    <>
      <AdminOrdersActives />
      <AdminTablesActives />
    </>
  );
};

export default HomePage;