const express = require('express');
//const oAuth = require('./auth');
const user = express.Router();
const { User } = require('../database/models/index');

user
    .route('/') // /user
    .get(async (req, res)=>{
        const users = await User.findAll();
        const result = [];

        for(var user of users){
            result.push({
                id : user.id,
                pwd : user.pwd,
                name : user.name,
                age : user.age,
                sex : user.sex,
                loc : user.loc,
                phone : user.phone,
                birth : user.birth,
                nickname : user.nickname
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



module.exports = user;