import passport from 'passport';
import LocalStrategy from 'passport-local';
// import {
//   Strategy as JWTStrategy,
//   ExtractJwt,
// } from 'passport-jwt';

import client from "../db/dbconnect.js";
//import User from '../modules/users/user.model';
//import constants from '../config/constants';

// const localOpts = {
//   usernameField: 'email',
// };

// // Jwt strategy
// const jwtOpts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('authorization'),
//   secretOrKey: constants.JWT_SECRET,
// };


//passport.use(new LocalStrategy(

async function authPassport(email, password, done) {
  // Query the database to find the user with the given username

  // this.email = email;
  // this.password = password;

  const query = `SELECT password FORM admin where email = '$1'`;


  try {
    const User = await client.query(query, [email]);
    //return res.rows;
    console.log('password ' + User.rows);
    //res.status(201).send(`User added with ID: ${User.rows[0].admin_id}`);


    User.findOne({ email: User.rows.email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });

  } catch (error) {
    throw error;
  }

}
//));

export default authPassport;

// const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
//   try {
//     client.query('SELECT * FROM admin WHERE email = $1 ', [email], (error, results) => {
//         if (error) {
//             return done(null, false);
//         }
//         // else if (!user.authenticateUser(password)) {
//         //     return done(null, false);
//         //   }
//         console.log('auth query' + results);
//         return done(null, user);
//       });

//     // if (!user) {
//     //   return done(null, false);
//     // } else if (!user.authenticateUser(password)) {
//     //   return done(null, false);
//     // }
//     // return done(null, user);
//   } catch (e) {
//     return done(e, false);
//   }
// });

// const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
//   try {
//     // Identify user by ID
//     const user = await User.findById(payload._id);

//     if (!user) {
//       return done(null, false);
//     }
//     return done(null, user);
//   } catch (e) {
//     return done(e, false);
//   }
// });

// passport.use(localStrategy);
// passport.use(jwtStrategy);

// export const authLocal = passport.authenticate('local', {
//   session: false,
// });

// export const authJwt = passport.authenticate('jwt', {
//   session: false,
// });


/* chat gpt

const express = require('express');
const app = express();

app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());




..

app.post('/login', 
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

*/