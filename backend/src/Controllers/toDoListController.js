const toDoListService = require('../Services/toDoListService')

const createTask = async(req,res,next) => {
const{id, email } = req.user;
const {task , status} = req.body;
const create = await toDoListService.createTask(email,id,task,status).catch(e => console.log(e))
res.status(200).json(create);
}

const findAllUser  = async(req,res,next) => {
const {id} = req.user;
const findAll = await toDoListService.findAllUser(id);
res.status(200).json(findAll);
return findAll

}


module.exports = {
  createTask,
  findAllUser
}