import { authUser, authRole, adminMid, clientMid, checkAuthenticated, checkNotAuthenticated, setUser } from "./authController"

  app.get('/admin', [checkAuthenticated, authUser, adminMid], (req, res) => {
    res.render('./adminView/adminDashboard.ejs')
  })



