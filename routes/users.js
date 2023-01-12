const express = require('express');
const users = express.Router();
const { User } = require('../database/models/index');

users
    .route('/') // /user
    .get(async (req, res)=>{
        const users = await User.findAll();
        const result = [];

        for(var user of users){
            result.push({
                id: user.id,
                pwd: user.pwd,
                name: user.name
            });
        }

        res.send(result);
    })
    .post((req, res)=>{
        res.send("User Profile Page _ to be write")
    })
    .delete((req, res)=>{
        res.send("User Profile Page _ to be write")
    });



module.exports = users;