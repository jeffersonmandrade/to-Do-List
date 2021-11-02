const express = require('express');

const  validateFildsLogin  = require('../middlewares/validateFildsLogin');
const { createUser,findUser  }   = require('../Controllers/loginController');


const router = express.Router();

router.route('/')
  .post(validateFildsLogin,createUser )
  .get(validateFildsLogin,findUser);

  module.exports = router;

