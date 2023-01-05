import client from "./dbconnect";

const TABLE = "admin";

const fields = [
    'id',
    'firstname',
    'lasttname',
    'description', 
    'email',
    'password'
];



    client.query('SELECT $1::text as name', ['brianc'], (err, res) => {
        if (err) throw err
        console.log(res)
        client.end()
      })

