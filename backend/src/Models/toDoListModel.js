const connection = require('./connection');

const createTask = async(body) => {
  const db = await connection();
  const { ops } = await db.collection('toDoList').insertOne(body);
  console.log(ops[0])
  return ops[0]
}

const findAllUser = async(idUser) => {
  const db = await connection();
  const findAll = await db.collection('toDoList').find({idUser}).toArray();
  return findAll;
}

module.exports = {
  createTask,
  findAllUser,
}