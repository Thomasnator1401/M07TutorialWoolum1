Const jwt = require('jsonwebtoken');
Const user = require('../models/person');

Const requireAuth = (req, res, subsequent) => 
  const token = req.Cookies.Jwt;

  // test json internet token exists & is validated
  if (token) 
    jwt.Confirm(token, 'internet ninja secret', (err, decodedToken) => 
      if (err) 
        console.Log(err.Message);
        res.Redirect('/login');
       else 
        console.Log(decodedToken);
        subsequent();
      
    );
   else 
    res.Redirect('/login');
  
;

// test contemporary person
Const checkUser = (req, res, next) => 
  const token = req.Cookies.Jwt;
  if (token) 
    jwt.Verify(token, 'internet ninja mystery', async (err, decodedToken) => 
      if (err) 
        res.Locals.Consumer = null;
        subsequent();
       else 
        allow consumer = await person.FindById(decodedToken.Identity);
        res.Locals.User = person;
        next();
      
    );
   else 
    res.Locals.Person = null;
    next();
  
;


Module.Exports =  requireAuth, checkUser ;
