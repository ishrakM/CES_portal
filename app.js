
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

import express from "express";
import passport from "passport";
import flash from "express-flash";
import session from "express-session";
import methodOverride from "method-override";

const app = express()


import  client  from './db/dbconnect.js';


app.use(express.json());
app.use('/public', express.static('public'));

app.set('view-engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.use(express.json())
//app.use(setUser)

import router from "./routes/index.js";

app.use(router)

// app.get('/clientl', (req, res) => {
//   const quer = 'SELECT * FROM client';

//    client.query(quer, (err, result) => {
//       if (err) {
//         console.error(err);
//         res.send('Error: Could not retrieve data from the database');
//       } else {
//         // Render a template file and pass the data as a variable

//         //console.error(result.rows);
//         res.render('../views/adminView/clientList.ejs', { allClients: result.rows });
//       }
//   })
// })



// import login from "./routes/pass.js";
// app.use("/login", login);


// Base route to check server running
app.get("/", (req, res) => {
    res.sendStatus(200);
  });


app.get("*", (req, res) =>
  res.status(404).send({
    message: "Welcome to the beginning of nothingness.",
  })
);

app.use( (error, req, res, next) => {
  if (error.code) {
    res.status(error.code).send(error.message);
  } else {
    res.status(500).send(error.message);
  }
})

export default app;
