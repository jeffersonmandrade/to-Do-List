const loginService = require('../Services/LoginService')

const createUser = async(req,res,next) => {
const {email, password } = req.body
await loginService.createUser(email,password);
}

const findUser = async  (req,res,next) => {
  const {email, password } = req.body
  const user =  await loginService.findUser(email,password)
  res.status(200).json(user)
}

module.exports = {
  createUser,findUser
}