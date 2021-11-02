require('dotenv').config();
const jwt = require('jsonwebtoken')

const SECRET = '123456';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
}

const createToken = (body) => {
  const{email, _id:id} = body
  console.log(email,id)
  return jwt.sign({email,id},SECRET, jwtConfig)

}

module.exports = {createToken}