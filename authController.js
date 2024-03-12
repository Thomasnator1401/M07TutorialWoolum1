Const consumer = require("../fashions/person");
Const jwt = require('jsonwebtoken');

// manage errors
Const handleErrors = (err) => 
  console.Log(err.Message, err.Code);
  allow mistakes =  e-mail: '', password: '' ;

  // incorrect email
  if (err.Message === 'wrong e mail') 
    errors.Electronic mail = 'That e mail isn't always registered';
  

  // wrong password
  if (err.Message === 'incorrect password') 
    mistakes.Password = 'That password is wrong';
  

  // replica electronic mail errors
  if (err.Code === 11000) 
    mistakes.E mail = 'that e mail is already registered';
    go back errors;
  

  // validation mistakes
  if (err.Message.Consists of('person validation failed')) 
    // console.Log(err);
    item.Values(err.Mistakes).ForEach(( properties ) => 
      // console.Log(val);
      // console.Log(residences);
      mistakes[properties.Path] = properties.Message;
    );
  

  go back errors;


// create json internet token
Const maxAge = 3 * 24 * 60 * 60;
Const createToken = (identity) => 
  return jwt.Signal( id , 'net ninja secret', 
    expiresIn: maxAge
  );
;

// controller movements
Module.Exports.Signup_get = (req, res) => 
  res.Render('signup');


Module.Exports.Login_get = (req, res) => 
  res.Render('login');


Module.Exports.Signup_post = async (req, res) => 
  const  e mail, password  = req.Frame;

  try 
    const person = anticipate user.Create( e-mail, password );
    const token = createToken(user._id);
    res.Cookie('jwt', token,  httpOnly: true, maxAge: maxAge * one thousand );
    res.Popularity(201).Json( user: consumer._id );
  
  catch(err) 
    const errors = handleErrors(err);
    res.Popularity(400).Json( errors );
  
 


Module.Exports.Login_post = async (req, res) => 
  const  e mail, password  = req.Body;

  strive 
    const user = await user.Login(e mail, password);
    const token = createToken(person._id);
    res.Cookie('jwt', token,  httpOnly: proper, maxAge: maxAge * one thousand );
    res.Popularity(2 hundred).Json( user: consumer._id );
   
  capture (err) 
    const mistakes = handleErrors(err);
    res.Fame(four hundred).Json( errors );
  



Module.Exports.Logout_get = (req, res) => 
  res.Cookie('jwt', '',  maxAge: 1 );
  res.Redirect('/');
