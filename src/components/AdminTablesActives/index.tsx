
import { updateTableNumberDesactive } from "@/services";
import styles from './AdminTablesActives.module.scss'
import { TableRestaurant } from "@/interfaces/interfaces";


interface AdminTablesActivesProps {
  tablesRestaurantActives: TableRestaurant[]
}


export const AdminTablesActives = ({ tablesRestaurantActives }: AdminTablesActivesProps) => {



  const handleDesactivate = (peopleInTableID: string) => () => {
    updateTableNumberDesactive(peopleInTableID)

  };



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
              <button onClick={handleDesactivate(table.PeopleInTableID)} className={styles.button}>Desactivar mesa.</button>
            </div>
          )) :
          <p>No hay llamadas de ninguna mesa en este momento.</p>}
      </div>
    </>
  )
}