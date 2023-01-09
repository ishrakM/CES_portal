import adminHandler from "./adminHandler.js";
import client from "../../db/dbconnect.js";



const functions = {
  adminDashboard: async (req, res, next) => {
    try {
      res.render('adminDashboard.ejs')
    } catch (err) {
      next(err);
    }
  },

  clientDetail: async (req, res, next) => {
    try {
      //const id =  req.body.clientId;

      // const clientDetail = await adminHandler.getClientById(id)
      // return adminHandler.getClientById;

      res.render('../views/adminView/clientDetail.ejs', {
        //client : {name: 'Ishrak'}
      })
      // db queries to get a clients
    } catch (err) {
      next(err);
    }
  },
  clientEdit: async (req, res, next) => {
    try {

      res.render('clientEdit.ejs')

      // db queries to update a clients
    } catch (err) {
      next(err);
    }
  },
  clientRegister: async (req, res, next) => {

    const { firstname, lasttname, description, creator_admin, email, password } = req.body;


    const query = `INSERT INTO client (firstname, lasttname, description, creator_admin, email, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    try {
      const result = await client.query(query, [firstname, lasttname, description, creator_admin, email, password]);
      //return res.rows;
      console.log('inserted ' + JSON.stringify(result.rows));
      res.status(201).send(`User added with ID: ${result.rows[0].client_id}`);

    } catch (error) {
      throw error;
    }
    // try {

    //   //const { firstname, lasttname, description, creator_admin, email, password} = ['rob', 'r', 'good', 'me', 'r@r', 'abcrrr'];

    //  // const { firstname, lasttname, description, creator_admin, email, password } = [req.body.firstname, req.body.lasttname, req.body.description, req.body.creator_admin, req.body.email, req.body.password];

    //   const { firstname, lasttname, description, creator_admin, email, password} = req.body;

    //   await client.query(`INSERT INTO client (firstname, lasttname, description, creator_admin, email, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    //     [firstname, lasttname, description, creator_admin, email, password],
    //     (err, result) => {

    //       console.log('inserted ' + result.rows);
    //       res.status(201).send(`User added with ID: ${result.rows[0].id}`);
    //       //res.render('../views/adminView/clientRegister.ejs')

    //     })



    //   client.end;
    // } catch (err) {
    //   next(err);
    // }
  },
  clientList: async (req, res, next) => {
    try {

      await client.query(`SELECT * FROM client`, (err, result) => {

        res.render('../views/adminView/clientList.ejs', {
          allClients: result.rows
        })
        client.end;
      })
    } catch (err) {
      next(err);
    }
  }
}






export default functions;