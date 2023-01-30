import { Router } from 'express';

const router = Router({
  caseSensitive: true
})

/*
// Use imported routes in router
router.use(catfactRouter);

export default router;
*/

const initializePassport = require('./auth/passport-config')
import { authUser, authRole, adminMid, clientMid, checkAuthenticated, checkNotAuthenticated, setUser } from "./controllers/authController"
  
//const functions = {
// app.get('/', checkAuthenticated, authUser, (req, res) => {
//   res.render('index.ejs', { 
//     name: req.user.name,
//     email: req.user.email
//   })
//   // res.render('index.ejs', { 
//   //   email: req.user.email, 
//   //   password: req.user.pass
//   // })
// })


  // ### login controller
  app.get('/', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
  })
  
  app.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
  }))
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
  })
  
  app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: hashedPassword
      })
      res.redirect('/')
    } catch {
      res.redirect('/register')
    }
  })
  
  app.delete('/logout', (req, res) => {
    req.logOut(function(err) {
      if (err) { 
        return next(err); }
      res.redirect('/');
    });
    
    //res.redirect('/login')
  })


  app.get('/redirect', (req, res) => {
    if(req.user.role === "admin")
    {
     res.redirect('/admin');
    }
    else
    {
     res.redirect('/client');
    }
    next(console.error('not wroking role redirect'))

  })
// }

// export default functions;