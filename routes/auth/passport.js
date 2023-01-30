import passport from "passport";
import {Strategy as LocalStrategy} from 'passport-local';
import bcrypt from 'bcrypt';
import client from '../../db/dbconnect.js';

//var result;

var session_id ;

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email', //can be 'email' or 'whateveryouwant'
            passwordField: 'password' //same thing here
        },
        async (email, password, done) => {

            

        const query = 'SELECT admin_id, email, password FROM admin WHERE email=$1';

        try {
           const result = await client.query(query, [email]);
            
          // session_id = result.rows[0].admin_id;
        
            //return res.rows;
            console.log('from db ' + JSON.stringify(result.rows));
            //res.status(201).send(`User added with ID: ${result.rows[0].client_id}`);

            if (result.rows.length == 0) {

                return done(null, false, { message: "Incorrect Username" });
            }
           
            // if (!bcrypt.compare(password, )) {
            //     return done(null, false, { message: "Incorrect password" });
            // }

            try {
                if (await bcrypt.compare(password, result.rows[0].password)) {
                  return done(null, result)
                } else {
                  return done(null, false, { message: 'Password incorrect' })
                }
              } catch (e) {
                return done(e)
              }

            //return done(null, );
      
          } catch (error) {
            throw error;
          }

    })
  );

   //console.log('before serialize  '+result.rows[0].admin_id)
  
  // create session id
  // whenever we login it creares user id inside session
  passport.serializeUser((session_id, done) => {
    done(null, session_id);
  });
  
  // find session info using session id
  passport.deserializeUser(async (admin_id, done) => {
    try {

    const user = await client.query(`SELECT * FROM client WHERE admin_id=$1`, [admin_id])
    //const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });