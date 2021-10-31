require('dotenv').config();
const jwt = require('jsonwebtoken')

const SECRET = '123456';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
}

const createToken = (email,password) =>  jwt.sign({email,password},SECRET, jwtConfig)

module.exports = {createToken}