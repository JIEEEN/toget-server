const express = require('express');
var admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccountKey.json");
//const path = require('path');
//const uuidAPIKey = require('uuid-apikey');
//const mysql = require('mysql');
const userRouter = require('./routes/users');

var cors = require('cors');

const port = process.env.PORT | 3000;
const app = express();

admin.initializeApp({ // Firebase
    credential: admin.credential.cert(serviceAccount)
});

app.use(cors());
app.use(express.json());
// /user�� ���õ� routing ó�� -> ./routes/users.js
app.use('./user', userRouter);


app.get('/', (req, res)=>{
    res.send('TOGET (WORKING)...'); 
});


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});




