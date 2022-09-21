// Express
const express = require('express');
const app = express();
// port
// const port = ;

// database
require("./db/conn");

//  It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());


// router
const router = require("./router/routesOld");
app.use(router);

// dotenv
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"})
const port = process.env.PORT || 3200;

// test
// app.get('/',(req,res)=>{
//     res.send('Hello')
// })

// listening
app.listen(port,()=>{
    console.log(`connected to the ${port}`);
})