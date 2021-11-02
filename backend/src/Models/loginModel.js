const connection = require('./connection');

const uniqueUser = async(email) => {
  const db = await connection();
  const find = await db.collection('users').findOne({email})
  return find
}

const createUser = async(email, password) => {
  const db = await connection();
  const {ops} = await db.collection('users').insertOne({email,password}).catch(err => console.log(err));
  if(uniqueUser(email)){
    return null;
  }

  return {email:ops[0].email,_id:ops[0]._id}
}

const findUser = async(email, password ) =>  {
  const db = await connection();
  const user = db.collection('users').findOne({email,password}).catch(err => console.log(err));
  return user;
}

module.exports = {
  createUser, findUser
}

