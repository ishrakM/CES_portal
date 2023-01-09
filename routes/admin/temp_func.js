import client from "../../db/dbconnect.js";

async function clientList() {
    try {
      const res = await client.query("SELECT * FROM client");
      //console.log(res.rows);
      // const out = res.rows;
      // console.log(out);

      res.render('../views/adminView/clientList.ejs', { allClients: res.rows })

      // return out;
    } catch (error) {
      console.error(error);
    }
  }

  export default {clientList};


