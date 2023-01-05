const functions = {
    adminDashboard: async (req, res, next) => {
        try {
            res.render('adminDashboard.ejs')
          } catch (err) {
            next(err);
          }
    },

    clientDetail: async (req, res, next) => {
        try {
            
            res.render('clientDetail.ejs')
            // db queries to get a clients
          } catch (err) {
            next(err);
          }
    },
    clientEdit: async (req, res, next) => {
      try {
          
          res.render('clientEdit.ejs')

          // db queries to update a clients
        } catch (err) {
          next(err);
        }
    },
    clientRegister: async (req, res, next) => {
      try {
          
          res.render('clientRegister.ejs')

          // db queries to register a clients
        } catch (err) {
          next(err);
        }
    },
    clientList: async (req, res, next) => {
      try {
          
          res.render('clientList.ejs')

          // db queries to see all clients
        } catch (err) {
          next(err);
        }
    }

}

export default functions;