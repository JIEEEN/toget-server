const express = require('express');
const users = express.Router();

users
    .route('/') // /user
    .get((req, res)=>{
        res.send("User Profile Page _ to be write")
    })
    .post((req, res)=>{
        res.send("User Profile Page _ to be write")
    })
    .delete((req, res)=>{
        res.send("User Profile Page _ to be write")
    });



module.exports = users;