const express = require('express');

const {validateJWT} = require('../middlewares/validationToken')
const { createTask, findAllUser, updateTask } = require('../Controllers/toDoListController');


const router = express.Router();


router.route('/')
  .post(validateJWT,createTask)
  .get(validateJWT, findAllUser)
  .put(validateJWT, updateTask)


  module.exports = router;