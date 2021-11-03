const express = require('express');

const {validateJWT} = require('../middlewares/validationToken')
const { createTask, findAllUser } = require('../Controllers/toDoListController')

const router = express.Router();


router.route('/')
  .post(validateJWT,createTask)
  .get(validateJWT, findAllUser)
  .put(validateJWT)
  .delete(validateJWT)

  module.exports = router;