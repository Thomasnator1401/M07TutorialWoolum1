Const  Router  = require('explicit');
Const authController = require('../controllers/authController');

Const router = Router();

Router.Get('/signup', authController.Signup_get);
Router. Post('/signup', authController.Signup_post);
Router.Get('/login', authController.Login_get);
Router.Publish('/login', authController.Login_post);
Router.Get('/logout', authController.Logout_get);

Module. Exports = router;
