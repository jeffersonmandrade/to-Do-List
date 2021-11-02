const connection = require('./connection');

const createUser = async(email, password) => {
  const db = await connection();
  await db.collection('users').insertOne({email,password});
}

