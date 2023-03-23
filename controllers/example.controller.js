//** INPORTS */
const srv= require('../services/example.service')

//** CONTROLLER */
const controller = {
    exampleController: (req, res, next) =>{
        try{
           const data = srv.exampleService()
           res.status(data.status).json(data)
        }catch(err){
            res.status(err.statusCode).json({message: err.message});
        }
    }
}

module.exports =controller