const express = require('express');
const admin = require('./firebase-config');

class OAuth{
    async decodeToken(req, res, next){
       const token = req.headers.authorization;
       try{
            const decodeValue = await admin.auth().verifyIdToken(token);
            if(decodeValue){
                console.log(decodeValue);
                return next();
            }
            return res.json({message : 'Unauthorized'});
       }
       catch(e){
            return res.json({message : 'Internal Error'});
       }
    }
}

module.exports = new OAuth;