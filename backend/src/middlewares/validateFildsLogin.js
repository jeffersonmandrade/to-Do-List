const rescue  = require('express-rescue');
const Joi = require('joi');

module.exports = rescue(async(req, res,next) => {
const{ email, password } = req.body
const {error} = Joi.object({
email: Joi.string().email().required(),
password: Joi.string().min(8).required(),
}).validate({email, password});

if(error){
  return next(error)
}
next()
})
