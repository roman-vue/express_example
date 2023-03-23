//**IMPORTS */
// const config = require("./env.variables.json")
const express = require("express");
const morgan = require("morgan");
const app = express();
const morganIn = require('./interceptors/loggers/morgan/morgan.interceptors')

//** SETTINGS  */
app.set('port', 3000 || config.PORT)

//**MIDLEWARES */
app.use(express.urlencoded({ extended: true, limit: '550mb', parameterLimit: 55000000 }));
app.use(express.json({ limit: '550mb' }));
app.use(morgan(morganIn))

//**ROUTES */
app.use('/', require('./routes/example.routes'))

//**LISTEN */
app.listen(app.get('port'), ()=>{
    console.log(`server started`);
    console.log(`http://localhost:${app.get('port')}`);
})