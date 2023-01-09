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
      try {

        await client.query(`INSERT INTO client`, (err, result) => {

          res.render('../views/adminView/clientRegister.ejs')

        })
          
          

          client.end;
        } catch (err) {
          next(err);
        }
    },
    clientList: async (req, res, next) => {
     try {
          
       await client.query(`SELECT * FROM client`, (err, result) =>{

            res.render('../views/adminView/clientList.ejs', {
              allClients : result.rows
            })
          client.end;
        })
        } catch (err) {
          next(err);
        }
    }
  }






export default functions;