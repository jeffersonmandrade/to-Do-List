const  jwt = require('jsonwebtoken');

const SECRET = '123456';

const validateJWT = async (req,_res,next) => {
  const { authorization } = req.headers;
  if(!authorization){
    next('validationJWT')
  }

  jwt.verify(authorization,SECRET,(err,_decoded) => {

    if(err){
      next('expiredToke')
    }
  })
  next()
}