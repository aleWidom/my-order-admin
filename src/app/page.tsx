"use client";
import { useContext, useEffect } from "react";
import {
  AdminOrdersActives,
  AdminTablesActives,
} from "@/components/index";
import { AdminContext } from "@/context/AdminContext";
import { fetchOrderItem, fetchTablesActive } from "@/services/admin";

const HomePage = () => {

  const { orderItem, setTablesRestaurantActives, setOrderItem } = useContext(AdminContext);

  useEffect(() => {
    //Busco todas las ordenes que no esten entregadas
    fetchOrderItem()
      .then((data) => {
        if (data !== undefined) {
          setOrderItem(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    //Busco las mesas activas
    fetchTablesActive()
      .then((data) => {
        if (data != undefined) {
          setTablesRestaurantActives(data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <AdminOrdersActives />
      <AdminTablesActives />
    </>
  );
};

export default HomePage;