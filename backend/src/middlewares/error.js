// eslint-disable-next-line no-unused-vars
module.exports = (err,_req,res,_next) => {
  if(err.isJoi){
    return res.status(400).json({message: err.details[0].message})
  }
}