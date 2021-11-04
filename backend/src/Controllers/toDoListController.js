const toDoListService = require("../Services/toDoListService");

const createTask = async (req, res, next) => {
  const { id, email } = req.user;
  const { task, status } = req.body;
  const create = await toDoListService
    .createTask(email, id, task, status)
    .catch((e) => console.log(e));
  res.status(200).json(create);
};

const findAllUser = async (req, res, next) => {
  const { id } = req.user;
  const findAll = await toDoListService.findAllUser(id);
  res.status(200).json(findAll);
  return findAll;
};

const updateTask = async (req, res, next) => {
  const { id } = req.user;
  const { email, task, status, _id } = req.body;
  const update = await toDoListService
    .updateTask(email, id, task, status, _id)
    .catch((erro) => console.log(erro));
  res.status(200).json(update);
};

const deleteTask = async (req, res, next) => {
  console.log('cheguei')
  const { _id: id } = req.body;
  const deleteData = await toDoListService.deleteTask(id);
  res.status(200).json(deleteData);
};

module.exports = {
  createTask,
  findAllUser,
  updateTask,
  deleteTask,
};
