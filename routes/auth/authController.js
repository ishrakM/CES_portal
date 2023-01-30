// //import initializePassport from "./passport-config.js";
// //import passport from "passport";
// //import {Strategy} from 'passport-local';

// import initialize from './passport-config.js';

// import client from '../../db/dbconnect.js';


// //app.set('view-engine', 'ejs')

// //import authLocal


// //const LocalStrategy = Strategy.LocalStrategy;

// // initializePassport(
// //     passport,
// //     email => users.find(user => user.email === email),
// //     id => users.find(user => user.id === id),
// //   )
  

// const functions = {
//     login: async (req, res, next) => {
//         try {
//             res.render('login.ejs')
//           } catch (err) {
//             next(err);
//           }
//     },

//     adminDash: async (req, res, next) => {
//       try{
//            //const email = req.body.email;
//           // let getUserById = req.body.password;
           
//           //console.log('email '+email+ ' - pass ' +pass)

//           const query = `SELECT password FORM admin where email = $1 RETURNING *`;

//           try {
//             const User = await client.query(query, ['j@j']);
//             //return res.rows;

//             let password = User.rows.password;

//             console.log('password ' + User.rows.password);
//           } catch (error) {
//             throw error;
//           }

//           passport.authenticate('local', { failureRedirect: '/' }),
//              function(req, res) {
//              res.redirect('../views/adminView/adminDashboard.ejs');
//            }


//           //initialize(passport, getUserByEmail, getUserById);

//           // res.render('../views/adminView/adminDashboard.ejs', {
//           //   //client : {name: 'Ishrak'}
//           // })

//       } catch (err) {
//         next(err);
//       }
//     }

//     // loginPass: async(req, res, next) => {
//     //   try{
//     //     passport.authenticate('local', {
//     //       successRedirect: '/',
//     //       failureRedirect: '/login',
//     //       failureFlash: true
//     //     })
//     //   }
//     //   catch{ (err){
//     //     next(err);
//     //      }
//     //   }
     
//     // }
   
// }



// export default functions;


// // app.get('/', checkAuthenticated, authUser, (req, res) => {
// //     res.render('index.ejs', { 
// //       name: req.user.name,
// //       email: req.user.email
// //     })
// //     // res.render('index.ejs', { 
// //     //   email: req.user.email, 
// //     //   password: req.user.pass
// //     // })
// //   })
  
  
// //     // ### login controller
// //     app.get('/login', checkNotAuthenticated, (req, res) => {
// //       res.render('login.ejs')
// //     })
    
// //     app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
// //       successRedirect: '/',
// //       failureRedirect: '/login',
// //       failureFlash: true
// //     }))
    
// //     app.get('/register', checkNotAuthenticated, (req, res) => {
// //       res.render('register.ejs')
// //     })
    
// //     app.post('/register', checkNotAuthenticated, async (req, res) => {
// //       try {
// //         const hashedPassword = await bcrypt.hash(req.body.password, 10)
// //         users.push({
// //           id: Date.now().toString(),
// //           name: req.body.name,
// //           email: req.body.email,
// //           role: req.body.role,
// //           password: hashedPassword
// //         })
// //         res.redirect('/login')
// //       } catch {
// //         res.redirect('/register')
// //       }
// //     })
    
// //     app.delete('/logout', (req, res) => {
// //       req.logOut(function(err) {
// //         if (err) { 
// //           return next(err); }
// //         res.redirect('/');
// //       });
      
// //       //res.redirect('/login')
// //     })
  
  
// //     app.get('/redirect', (req, res) => {
// //       if(req.user.role === "admin")
// //       {
// //        res.redirect('/admin');
// //       }
// //       else
// //       {
// //        res.redirect('/client');
// //       }
// //       next(console.error('not wroking role redirect'))
  
// //     })
//   // }
  
//   // export default functions;