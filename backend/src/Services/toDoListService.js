const toDoListModel = require('../Models/toDoListModel');

const createTask = async (email,id,task,status) => {
const date = new Date();
const createDate = date.toLocaleString()
const body = {email,idUser: id, task,status, createDate}
const create = await toDoListModel.createTask(body);
return create;
}

const findAllUser  = async(idUser) => {
  const findAll = await toDoListModel.findAllUser (idUser)
  return findAll
}

const updateTask = async(email, idUser, task, status,id) => {
const date = new Date();
const createDate = date.toLocaleDateString();
const body = { email,task,idUser, status,createDate };
const update = await  toDoListModel.updateTask(id,body)
return update;
}

module.exports = {
  createTask,
  findAllUser,
  updateTask
}