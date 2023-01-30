
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

import express from "express";
import passport from "passport";
import flash from "express-flash";
import session from "express-session";
import methodOverride from "method-override";
import winston from "winston/lib/winston/config/index.js";

import './routes/auth/passport.js'

const app = express()



import  client  from './db/dbconnect.js';



import {Strategy as LocalStrategy} from 'passport-local';
import bcrypt from 'bcrypt';



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



app.get('/', (req, res) => {
    res.render('login.ejs');
  });

  app.get('/admin', (req, res) => {
    res.render('./adminView/adminDashboard.ejs', { 
      // name: req.user.name,
      // email: req.user.email
    })
    // res.render('index.ejs', { 
    //   email: req.user.email, 
    //   password: req.user.pass
    // })
  })



  app.post('/', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/',
    failureFlash: true,
    session: false
  }))
  

  // app.get('./adminView/clientRegister', (req, res) => {
  //   res.render('register.ejs')
  // })
  
  app.post('/adminRegister', async (req, res) => {



    const { firstname, lasttname, description, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 10)


    const query = `INSERT INTO admin (firstname, lasttname, description, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    try {
      const result = await client.query(query, [firstname, lasttname, description, email, hashedPassword]);
      //return res.rows;
      console.log('inserted into admin ' + JSON.stringify(result.rows));
      res.status(201).send(`User added with ID: ${result.rows[0].firstname}`);

      client.end;

    } catch (error) {
      throw error;
    }


    // try {
    //   const hashedPassword = await bcrypt.hash(req.body.password, 10)
    //   users.push({
    //     id: Date.now().toString(),
    //     name: req.body.name,
    //     email: req.body.email,
    //     role: req.body.role,
    //     password: hashedPassword
    //   })


    //   res.redirect('/login')
    // } catch {
    //   res.redirect('/register')
    // }
  })






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
