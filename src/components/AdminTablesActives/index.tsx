
import { updateTableNumberDesactiveTable, updateTableNumberNotCall } from "@/services";
import styles from './AdminTablesActives.module.scss'
import { OrderInProcess, TableRestaurant } from "@/interfaces/interfaces";


interface AdminTablesActivesProps {
  tablesRestaurantActives: TableRestaurant[],
  allOrders: OrderInProcess[]
}


export const AdminTablesActives = ({ tablesRestaurantActives, allOrders }: AdminTablesActivesProps) => {

  const handleDesactivateTable = (peopleInTableID: string, numberTable: string) => () => {
    updateTableNumberDesactiveTable(peopleInTableID, numberTable, allOrders)
  };

  const handleDesactivateCall = (numberTable: string) => () => {
    updateTableNumberNotCall(numberTable)
  };

  console.log(tablesRestaurantActives)


  return (
    <>
      <h2 className={styles.header}>Mesas Activas</h2>
      <div className={styles.container}>
        {tablesRestaurantActives?.length > 0 ?
          tablesRestaurantActives.map((table, i) => (
            <div key={i} className={styles.containerTable}>
              <h2 className={styles.numberTable}>Mesa {table.table_number}</h2>
              <div className={styles.table}>
                <h4>ID Mesa PeopleInTable:</h4>
                <p>{table.PeopleInTableID}</p>
              </div>
              {table.table_call === "1" && <button className={styles.buttonDesactivateCall} onClick={handleDesactivateCall(table.id_table)}>Desactivar llamado mesa.</button>}
              <button onClick={handleDesactivateTable(table.PeopleInTableID, table.table_number)} className={styles.button}>Desactivar mesa.</button>
            </div>
          )) :
          <p>No hay mesas activas en este momento.</p>}
      </div>
    </>
  )
}	