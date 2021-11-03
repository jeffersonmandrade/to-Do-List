const toDoListModel = require('../Models/toDoListModel');

const createTask = async (email,id,task,status) => {
const date = new Date();
console.log(id)
const createDate = date.toLocaleString()
const body = {email,idUser: id, task,status, createDate}
const create = await toDoListModel.createTask(body);
return create;
}

const findAllUser  = async(idUser) => {
  const findAll = await toDoListModel.findAllUser (idUser)
  return findAll
}

module.exports = {
  createTask,
  findAllUser
}