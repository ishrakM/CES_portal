import pg from "pg";
import "dotenv/config";

const {
  DB_USERNAME: user,
  DB_PASSWORD: password,
  DB_DATABASE: database,
  DB_HOST: host,
  DB_PORT: port,
} = process.env;

const client = new pg.Client({
  user,
  host,
  database,
  password,
  port,
});


await client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected to db')
  }
});

// console.log(client.database);

// await client.query(`SELECT * FROM admin`, (err, res) =>{
//   if(!err){
//     console.log(res.rows)
//   }
//   else{
//     console.log(err.message)
//   }

//   client.end;
// })



export default client;

// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "abcd1234",
//   database: "ces_portal",
//   host: "localhost",
//   port: "5432" 
// });


//  pool.query(`SELECT * FROM admin`, async (err, res) =>{
//     if(!err){
//       console.log(res.rows)
//     }
//     else{
//       console.log(err.message)
//     }
  
//     client.end;
//   })

//module.exports = pool;