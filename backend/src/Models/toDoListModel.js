const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createTask = async(body) => {
  const db = await connection();
  const { ops } = await db.collection('toDoList').insertOne(body).catch(erro => console.log(erro));
  return ops[0]
}

const findAllUser = async(idUser) => {
  const db = await connection();
  const findAll = await db.collection('toDoList').find({idUser}).toArray().catch(erro => console.log(erro));
  return findAll;
}

const updateTask = async(id, body) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const {value} = await db.collection('toDoList').findOneAndUpdate(
    { _id: ObjectId(id) },
    {$set: body},
    { returnOriginal: false },
  ).catch(erro => console.log(erro))
return value;
}

const deleteTask = async(id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const deleteData = await db.collection('toDoList')
    .deleteOne({_id: ObjectId(id)}).catch(erro => console.log(erro))
  return deleteData;
}

module.exports = {
  createTask,
  findAllUser,
  updateTask,
  deleteTask
}