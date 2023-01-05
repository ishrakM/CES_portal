
//const initializePassport = require('../passport-config')
//import initializePassport from "../passport-config.js"




// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id),
// )



// ##### authentication ####

const checkAuthenticated = (req, res, next) =>{
    if (req.isAuthenticated()) {
      return next()
    } 
    res.redirect('/login')
  }
  
 const checkNotAuthenticated = (req, res, next) =>{
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }

  

//   function setUser(req, res, next) {
//     const userId = req.body.userId
//     if (userId) {
//       req.user = users.find(user => user.id === userId)
//     }
//     next()
//   }


//   // end authentication 


//   // ##### authorization ####


// function authUser(req, res, next) {
//     if (req.user == null) {
//       res.status(403)
//       return res.send('You need to sign in')
//     }
  
//     next()
//   }
  
//   function authRole(role) {
//     return (req, res, next) => {
//       if (req.user.role !== role) {
//         res.status(401)
//         return res.send('Not allowed')
//       }
  
//       next()
//     }
//   }
  
//   function adminMid(req, res, next){
//     if (req.user.role !== "admin") {
//       res.status(401)
//       return res.send('Not allowed, you are not admin')
//     }
//     next()
//   }

//   function clientMid(req, res, next){
//     if (req.user.role === "client" || req.user.role === "admin")
//     {
//       next()
      
//     }
//     else
//     {
//       res.status(401)
//       return res.send('Not allowed, you are not client')
//     }
    
//   }

//  end authentication 

  // module.exports = {
  //   authUser,
  //   authRole,
  //   adminMid,
  //   clientMid,
  //   checkAuthenticated,
  //   checkNotAuthenticated,
  //   setUser
  // }

  export default { checkAuthenticated, checkNotAuthenticated };