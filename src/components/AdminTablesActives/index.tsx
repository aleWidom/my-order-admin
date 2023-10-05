import { useContext } from "react";
import { AdminContext, /* SearchContext */ } from "@/context/AdminContext";
import styles from './AdminTablesActives.module.scss'
import { updateTableNumberDesactive, updateTableNumberNotCall } from "@/services";
/* import { ModalInfo } from "../ModalInfo"; */

export const AdminTablesActives = () => {

/*   const { modalInfo, setModalInfo } = useContext(SearchContext); */

  const { tablesRestaurantActives } = useContext(AdminContext);

  /* const numberTable = JSON.parse(localStorage.getItem('table') as any) */

  const handleDesactivate = (tableID: string) => () => {
  updateTableNumberDesactive(tableID);  

  /*   setModalInfo({
      state: true,
      description: `La mesa ${numberTable} ha sido desactivada`,
      section: 'admin',
    });  */
  };
  
  const handleCancelCall = (tableID: string) => () => {
    updateTableNumberNotCall(tableID);  
   /*   setModalInfo({
      state: true,
      description: `La mesa ${numberTable} ha sido desactivada`,
      section: 'admin',
    });  */
    };


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Mesas Activas</h1>
        {tablesRestaurantActives?.length > 0 ?
          tablesRestaurantActives.map((table) => (
            <div key={table.table_number} className={styles.containerTable}>
              <h4 className={styles.numberTable}>Mesa: {table.table_number}</h4>
              {table.table_call === '1' && <button onClick={handleCancelCall(table.TableID)}>Cancelar llamado</button>}
              <button onClick={handleDesactivate(table.TableID)}>Desactivar mesa</button>
            </div>
          )) :
          <p>No hay llamadas de ninguna mesa en este momento.</p>}
      </div>
   {/*    {modalInfo.section === 'admin' && <ModalInfo />} */}
    </>
  )
}