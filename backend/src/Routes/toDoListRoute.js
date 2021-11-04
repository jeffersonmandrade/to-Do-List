const express = require('express');

const {validateJWT} = require('../middlewares/validationToken')
const { createTask, findAllUser, updateTask,deleteTask } = require('../Controllers/toDoListController');


const router = express.Router();


router.route('/')
.post(validateJWT,createTask)
.get(validateJWT, findAllUser)
.put(validateJWT, updateTask)
.delete(validateJWT, deleteTask)


  module.exports = router;