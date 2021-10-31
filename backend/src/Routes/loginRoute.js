const express = require('express');

const  validateFildsLogin  = require('../middlewares/validateFildsLogin');

const router = express.Router();

router.route('/')
  .post(validateFildsLogin );

  module.exports = router;

