import fetch from "node-fetch";
import client from "../../db/dbconnect";




const getClientById = async (clientId) => {
    await client.query(`SELECT  ${clientId} FROM admin`, (err, res) =>{
      if(!err){
       console.log(res.rows)
      }
      else{
       return err;
      }
  client.end;
})
  };