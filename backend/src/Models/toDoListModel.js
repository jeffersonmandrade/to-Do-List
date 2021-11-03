const { ObjectId } = require('mongodb');
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

const updateTask = async(id, body) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
const db = await connection();
const { value } = db.collection('toDolist').findOneAndUpdate(
  {_id: ObjectId(id)},
  {$set: body},
  { retrunDocument: "after"},

)
return value

}

module.exports = {
  createTask,
  findAllUser,
  updateTask,
}