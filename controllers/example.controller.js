//** INPORTS */
const srv= require('../services/example.service')

//** CONTROLLER */
const controller = {
    exampleController: (req, res, next) =>{
      const data = srv.exampleService()
      res.status(data.status).json(data)
    }
}

module.exports =controller