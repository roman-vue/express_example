//** INPORTS */


//** SERVICES */
const service = {
    exampleService(){
        try{
            return {status: 200, data: 'example service'}
        }catch(err){
            throw new Error(err)
        }
    }
}

module.exports = service