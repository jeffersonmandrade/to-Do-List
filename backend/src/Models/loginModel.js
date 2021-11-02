const connection = require('./connection');

const createUser = async(email, password) => {
  const db = await connection();
  await db.collection('users').insertOne({email,password});
}

const findUser = async(email, password ) =>  {
  const db = await connection();
  const user = db.collection('users').findOne({email,password})
  return user;
}

module.exports = {
  createUser, findUser
}

