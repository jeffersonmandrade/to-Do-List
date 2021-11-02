const rescue = require('express-rescue')
const loginService = require('../Services/LoginService')
const { createToken } = require('../token/createToken')


const createUser = rescue(async(req,res,next) => {
const {email, password } = req.body
const newUser = await loginService.createUser(email,password);
if(!newUser){
 return  next("userAlreadyExist")
}
res.status(201).json(newUser)
})

const findUser = async  (req,res,next) => {
  const {email, password } = req.body
  const user =  await loginService.findUser(email,password)
  if(!user){
    return next("userDoesntExist")
  }
  const token = await  createToken(user);
  console.log(token)
  res.status(200).json({token})
}

module.exports = {
  createUser,findUser
}