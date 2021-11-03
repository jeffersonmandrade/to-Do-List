const express = require('express');

const {validateJWT} = require('../middlewares/validationToken')
const { createTask } = require('../Controllers/toDoListController')

const router = express.Router();


router.route('/')
  .post(validateJWT,createTask)
  .get(validateJWT)

  module.exports = router;