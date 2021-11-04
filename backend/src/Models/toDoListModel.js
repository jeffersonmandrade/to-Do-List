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
  // if (!ObjectId.isValid(id)) {
  //   return null;
  // }
  console.log(id)
  const db = await connection();
  const {value} = await db.collection('toDoList').findOneAndUpdate(
    { _id: ObjectId(id) },
    {$set: body},
    { returnOriginal: false },
  )
console.log(value)
return value;

}

module.exports = {
  createTask,
  findAllUser,
  updateTask,
}