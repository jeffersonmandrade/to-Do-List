const loginModel = require('../Models/loginModel')

const createUser = async(email,password) => {
  await loginModel.createUser(email,password);
}

const findUser = async(email,password)=> {
  const user = await loginModel.findUser(email,password)
  return user;
}

module.exports = {
  createUser,findUser
}