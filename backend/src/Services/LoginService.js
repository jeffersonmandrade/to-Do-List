const loginModel = require('../Models/loginModel')

const createUser = async(email,password) => {
  const newUser = await loginModel.createUser(email,password).catch(err => console.log(err));
  return newUser;
}

const findUser = async(email,password)=> {
  const user = await loginModel.findUser(email,password).catch(err => console.log(err));
  return user;
}

module.exports = {
  createUser,findUser
}