const checkAuthenticated = (req, res, next) =>{
    if (req.isAuthenticated()) {
      return next()
    } 
    res.redirect('/')
  }
  
 const checkNotAuthenticated = (req, res, next) =>{
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }

    // ##### authorization ####


function authUser(req, res, next) {
    if (req.user == null) {
      res.status(403)
      return res.send('You need to sign in')
    }
  
    next()
  }
  
  function authRole(role) {
    return (req, res, next) => {
      if (req.user.role !== role) {
        res.status(401)
        return res.send('Not allowed')
      }
  
      next()
    }
  }
  
  function adminMid(req, res, next){
    if (req.user.role !== "admin") {
      res.status(401)
      return res.send('Not allowed, you are not admin')
    }
    next()
  }

  function clientMid(req, res, next){
    if (req.user.role === "client" || req.user.role === "admin")
    {
      next()
      
    }
    else
    {
      res.status(401)
      return res.send('Not allowed, you are not client')
    }
    
  }

  


  export default { 
    checkAuthenticated, 
    checkNotAuthenticated, 
    authUser,
    authRole,
    adminMid,
    clientMid
  };
