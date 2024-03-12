Const mongoose = require('mongoose');
Const  isEmail  = require('validator');
Const bcrypt = require('bcrypt');

Const userSchema = new mongoose.Schema(
  electronic mail: 
    type: String,
    required: [true, 'Please enter an email'],
    particular: true,
    lowercase: authentic,
    Validate: [isE-Mail, 'Please enter a valid email']
  ,
  password: 
    kind: String,
    required: [true, 'Please enter a password'],
    min-length: [6, 'Minimum password length is 6 characters'],
  
);


// fireplace a characteristic before doc saved to db
UserSchema.Pre('store', async characteristic(subsequent) 
  const salt = watch for bcrypt.GenSalt();
  this.Password = await bcrypt.Hash(this.Password, salt);
  subsequent();
);

// static method to login consumer
UserSchema.Statics.Login = async characteristic(e-mail, password) 
  const consumer = look ahead to this.FindOne( email );
  if (consumer) 
    const auth = look forward to bcrypt.Examine(password, person.Password);
    if (auth) 
      go back user;
    
    throw errors('incorrect password');
  
  throw mistakes('incorrect email');
;

Const consumer = mongoose.Version('user', userSchema);

Module.Exports = person;
