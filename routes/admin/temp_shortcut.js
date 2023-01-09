import { Express} from "express";
import client from "../../db/dbconnect.js";

const app = Express();


app.get('/clientl', (req, res) => {
    const quer = 'SELECT * FROM client';

    client.query(quer, (err, result) => {
        if (err) {
          console.error(err);
          res.send('Error: Could not retrieve data from the database');
        } else {
          // Render a template file and pass the data as a variable
          res.render('../views/adminView/clientList.ejs', { allClients: result.rows });
        }
    })
})
