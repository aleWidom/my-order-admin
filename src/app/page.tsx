"use client";
import { useContext, useEffect } from "react";
import {
  AdminOrdersActives,
  AdminTablesActives,
} from "@/components/index";
import { AdminContext } from "@/context/AdminContext";
import { fetchOrderItem, fetchTablesActive } from "@/services/admin";
import styles from './page.module.scss'

const HomePage = () => {

  const { setTablesRestaurantActives, setAllOrders } = useContext(AdminContext);


  useEffect(() => {
    const fetchDataAndSetTimeout = () => {
      //Busco todas las ordenes que no esten entregadas
      fetchOrderItem()
        .then((data) => {
          if (data !== undefined) {
            console.log(data)
            setAllOrders(data);
          }
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setTimeout(fetchDataAndSetTimeout, 2000); // Llama a la función recursivamente después de 5 segundos
        });
    };

    // Llama a fetchDataAndSetTimeout por primera vez
    fetchDataAndSetTimeout();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
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
  }, [])

  return (
    <div className={styles.container}>
      <AdminOrdersActives />
      {/*     <AdminTablesActives /> */}
    </div>
  );
};

export default HomePage;



