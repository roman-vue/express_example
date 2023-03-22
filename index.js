const config = require("./env.variables.json")
const express = require("express");
const app = express();

app.set('port', 3000 || config.PORT)
app.listen(app.get('port'), ()=>{
    console.log(`server started`);
    console.log(`port ${app.get('port')}`);
})