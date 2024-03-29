import fetch from "node-fetch";
import client from "../../db/dbconnect.js";




// const getClientById = async (clientId) => {
   
//       await client.query('SELECT * FROM users WHERE id = $1', [clientId], (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).json(results.rows)
//       })
//      client.end;

//   };


  const getClient = (req, res) => {
     client.query('SELECT * FROM client', (error, results) =>  {
    if (error) {
      throw error;
    }
    console.log('data ' + results)
    //res.render('../views/adminView/clientList.ejs', { allClients: results.rows })
    // var out = results.rows;
     //console.log('results.rows ' + out);
     return results.rows;
  });
  };


//   async function getClient(){
//    try {
//     const res = await client.query("SELECT * FROM client");
//     //console.log(res.rows);
//     // const out = res.rows;
//     // console.log(out);

//     res.render('/clientList', { allClients: res.rows })

//     // return out;
//   } catch (error) {
//     console.error(error);
//   }

// }

const getClientById = (request, response) => {
  const id = parseInt(request.params.id);

  client.query('SELECT * FROM client WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createClient = (request, response) => {
  const { name, email } = request.body;

  client.query(
    'INSERT INTO client (name, email) VALUES ($1, $2) RETURNING *',
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`client added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateClient = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  client.query(
    'UPDATE client SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`client modified with ID: ${id}`);
    }
  );
};

const deleteClient = (request, response) => {
  const id = parseInt(request.params.id);

  client.query('DELETE FROM client WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`client deleted with ID: ${id}`);
  });
};

export default {
  getClient,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};