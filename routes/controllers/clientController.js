

app.get('/client', [checkAuthenticated, authUser, clientMid], (req, res) => {
    res.render('./clientView/clientDashboard.ejs', { 
      name: req.user.name,
      email: req.user.email
    })
  })
  