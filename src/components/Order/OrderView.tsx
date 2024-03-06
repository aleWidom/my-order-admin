import { useContext } from "react"
import { AdminContext } from "@/context/AdminContext"
import { fetchOrderItem, makeRegistered } from "@/services"
import styles from './OrderView.module.scss'

interface OrderViewProps {
  order: any
}

export const OrderView = ({ order }: OrderViewProps) => {

  const { setAllOrders } = useContext(AdminContext)

  const handleClickRegister = (orderID: any) => () => {
    console.log("ooooa")
    //seteo producto como registrado
    makeRegistered(orderID)
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
    <div className={styles.containerOrder}>
      <h2 className={styles.table}>Mesa {order.numberTable}</h2>
      <p className={styles.title}>{order.title}</p>
      <p>Cantidad: {order.quantity}</p>
      <button onClick={handleClickRegister(order.OrderNumberID)} className={styles.buttonRegisterItemOrder}>Registrar.</button>
    </div>
  )
}






//items
/* exports.handler = async (event) => {

  let mysql = require('mysql');

  let connection;

  let result;


try {

   connection= mysql.createConnection({
      host: 'myorderdatabase.cluster-ctulrcqrkejd.us-east-1.rds.amazonaws.com',
      user: 'admin',
      password: 'admin123456',
      database: 'myorder'
   })

  let queryMySql = `select * from Item`

  if (event.queryStringParameters?.categories !== undefined) {
      queryMySql = `SELECT * from Category ORDER BY CategoryID Asc;`
  }
  else if (event.queryStringParameters?.search !== undefined) {
      queryMySql = `select * from Item where title like "%${event.queryStringParameters.search}%"`
  }
  else if (event.queryStringParameters?.fetchItemPeopleInTable !== undefined) {
      queryMySql = `select id_item as ItemID, title, orderNumberID, id_peopleInTable, numberTable , quantity, price,state, date from Item_peopleInTable , Item
      Where Item_peopleInTable.id_item = Item.ItemID && Item_peopleInTable.id_peopleInTable = ${JSON.stringify(event.queryStringParameters.fetchItemPeopleInTable)} ORDER BY date DESC`
  }
  else if (event.queryStringParameters?.itemsAcordingCategory !== undefined) {
      queryMySql = `select ItemID, title, description, price from Category , Item
      where CategoryID = Item.id_category AND CategoryID=${event.queryStringParameters.itemsAcordingCategory}`
  }
  else if (event.queryStringParameters?.makeRegistered !== undefined) {
      queryMySql = `Update Item_peopleInTable SET state = "registered" where OrderNumberID = ${JSON.stringify(event.pathParameters.proxy.slice(0, 36))}`
  }
  else if (event.queryStringParameters?.deleteItem !== undefined) {
      queryMySql = `DELETE FROM Item_peopleInTable WHERE OrderNumberID = ${JSON.stringify(event.queryStringParameters.deleteItem)} ;`
  }

  const promiseQuery = new Promise((resolve) => {
      connection.query(`${queryMySql}`, function (error, results, fields) {
          resolve(results)
      });
  })
  result = await promiseQuery
}

  catch (err) {
  return err
} finally {
  if (connection) await connection.end()
}




  return {
      statusCode: 200,
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify(result),
  };
}; */




//tables
/* 
exports.handler = async (event) => {
  let mysql = require('mysql');

  let connection;

  let result;

  let body = JSON.parse(event.body);

  try {
    connection = mysql.createConnection({
      host: 'myorderdatabase.cluster-ctulrcqrkejd.us-east-1.rds.amazonaws.com',
      user: 'admin',
      password: 'admin123456',
      database: 'myorder',
    });

    let queryMySql = `select * from Table_`;

    if (event.queryStringParameters?.active !== undefined) {
      queryMySql = `select * from Table_ Where table_active = 1`;
    } else if (event.queryStringParameters?.activeCall !== undefined) {
      queryMySql = `select * from Table_ Where table_call = 1   ORDER BY dateCall desc`;
    } else if (event.queryStringParameters?.resetAllTables !== undefined) {
      queryMySql = `UPDATE Table_ set table_call = 0, table_active = 0`;
    } else if (event.queryStringParameters?.itemPeopleInTableJoin !== undefined) {
      queryMySql = `select ItemPeopleInTableID, orderNumberID, numberTable, quantity, title, id_item, state from PeopleInTable, Item_peopleInTable , Item
        where  Item_peopleInTable.id_peopleInTable = PeopleInTable.PeopleInTableID AND  Item_peopleInTable.id_item= Item.ItemID AND state != "delivered" order by date DESC, numberTable ASC;`;
    } else if (event.queryStringParameters?.peopleInTable !== undefined) {
      queryMySql = `INSERT INTO PeopleInTable (PeopleInTableID,id_table)
        VALUES ( ${JSON.stringify(event.pathParameters.proxy.slice(0, 36))}, ${JSON.stringify(event.pathParameters.proxy.slice(37, 73))});`;
    } else if (event.queryStringParameters?.peopleInTableSearch !== undefined) {
      queryMySql = `Select * from PeopleInTable Where id_table = ${JSON.stringify(
        event.queryStringParameters.peopleInTableSearch
      )} Order by entry Desc`;
    } else if (event.queryStringParameters?.searchTable !== undefined) {
      queryMySql = `Select * from Table_ Where TableID = ${JSON.stringify(event.queryStringParameters.searchTable)}`;
    } else if (event.queryStringParameters?.activate !== undefined) {
      queryMySql = `UPDATE Table_ Set table_active = 1 Where tableID = ${JSON.stringify(event.queryStringParameters.activate)}`;
    } else if (event.queryStringParameters?.desactivate !== undefined) {
      queryMySql = `UPDATE Table_ Set table_active=0, table_call=0  Where tableID = ${JSON.stringify(
        event.queryStringParameters.desactivate
      )}`;
    } else if (event.queryStringParameters?.call !== undefined) {
      queryMySql = `UPDATE Table_ Set table_call= 1 Where tableID = ${JSON.stringify(event.queryStringParameters.call)}`;
    } else if (event.queryStringParameters?.notCall !== undefined) {
      queryMySql = `UPDATE Table_ Set table_call= 0 Where tableID = ${JSON.stringify(event.queryStringParameters.notCall)}`;
    } else if (event.queryStringParameters?.itemPeopleInTable !== undefined) {
      queryMySql = `INSERT INTO Item_peopleInTable (OrderNumberID, id_peopleInTable, numberTable, quantity, id_item, state)
  VALUES ${body.detail.map(
    (value) =>
      `(${JSON.stringify(body.orderNumber)}, ${JSON.stringify(body.idPeopleInTable)}, ${JSON.stringify(body.numberTable)}, ${JSON.stringify(
        value.quantity
      )}, ${JSON.stringify(value.id_item)}, 'in process')`
  )}`;
    }
    else if (event.queryStringParameters?.deleteOrder !== undefined) {
      queryMySql = `DELETE FROM Item_peopleInTable WHERE OrderNumberID = ${JSON.stringify(event.queryStringParameters.deleteOrder)}`;
    }


    const promiseQuery = new Promise((resolve) => {
      connection.query(`${queryMySql}`, function (error, results, fields) {
        resolve(results);
      });
    });
    result = await promiseQuery;
  } catch (err) {
    return err;
  } finally {
    if (connection) await connection.end();
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT,PATCH',
    },
    body: JSON.stringify(result),
  };
};
 */