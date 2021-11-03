const toDoListService = require('../Services/toDoListService')

const createTask = async(req,res,next) => {
const{id, email } = req.user;
console.log(req.user)
const {task , status} = req.body;
const create = await toDoListService.createTask(email,id,task,status).catch(e => console.log(e))
res.status(200).json(create);
}

module.exports = {
  createTask
}