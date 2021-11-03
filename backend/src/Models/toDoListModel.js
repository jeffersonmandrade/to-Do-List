const connection = require('./connection');

const createTask = async(body) => {
  const db = await connection();
  const { ops } = await db.collection('toDoList').insertOne(body);
  console.log(ops[0])
  return ops[0]
}

module.exports = {
  createTask
}