const  jwt = require('jsonwebtoken');

const SECRET = '123456';

const validateJWT = async (req,_res,next) => {
  const { authorization } = req.headers;
  if(!authorization){
    next('validationJWT')
  }

  jwt.verify(authorization,SECRET,(err,decoded) => {

    if(err){
      next('expiredToke')
    }
    if(decoded){
      const{id, email} = decoded;
      req.user = {id, email};
    }
  })

  next()
}
module.exports = { validateJWT }