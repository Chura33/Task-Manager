const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
    
  if (err instanceof CustomAPIError) {
    return res.status(err.errors).json({ msg: err.message })
  }
  console.log(err.errors.name.properties.message)
//   return res.status(500).send("not allowed")
  return res.status(500).json({ msg: err.errors.name.properties.message? err.errors.name.properties.message:'Something went wrong, please try again' })
}

module.exports = errorHandlerMiddleware