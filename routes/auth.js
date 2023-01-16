const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../database/models/index');
const auth = express.Router();


auth.
    route('/signup')
    .post(async(req, res, next) => {
        const {id, pwd, name, age, sex, loc, phone, birth, nickname} = req.body;

        try{
            const existID = await User.findOne({where: {id}});

            //이미 있는경우
            if(existID){
                res.status(500).json({error: 'ID already exist'});
            }

            //password 암호화
            const hash = await bcrypt.hash(pwd, 10); //해시함수 반복횟수

            await User.create({
                id, pwd:hash, name, age, sex, loc, phone, birth, nickname
            })
            .then(console.log('User create Success!'));

            return res.status(200).json({success: 'true'});
        }
        catch(e){
            console.error(e);
            return next(e);
        };
});

module.exports = auth;

