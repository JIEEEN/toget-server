const express = require('express');
//const path = require('path');
//const uuidAPIKey = require('uuid-apikey');
//const mysql = require('mysql');
const userRouter = require('./routes/users');

var cors = require('cors');

const port = process.env.PORT | 8080;
const app = express();


app.use(cors());
app.use(express.json());
// /user客 包访等 routing 贸府 -> ./routes/users.js
app.use('./user', userRouter);


app.get('/', (req, res)=>{
    res.send('TOGET (WORKING)...'); 
});


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});




