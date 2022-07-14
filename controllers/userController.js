//var Users= require('../models/users');
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
require('dotenv').config()

exports.log_in_get=(req,res,next)=>{
    console.log(req.user,'dsdaasdadsa')
    res.json({user:req.user})
}

exports.log_in_post=(req,res,next)=>{
    console.log(req.body.username,'usernameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    //   Users.findOne({ username: req.body.username }, (err, user) => {
         try{
           if (req.body.username!=='user') {
             console.log("Username not found")
            return res.send({errors:"Username not found"})
           }
           console.log("Indo comparar passwordss")
         //  bcrypt.compare(req.body.password, user.password, (err, ress) => {
               if (req.body.password==='password') {
                 // passwords match! log user in
                 console.log("passwords match! log user in")
                //return res.send("Password match, log in")  
                let expire=3600  
                let user=req.body.username
                console.log(user,'userrrrrrrrnameeeeeeeeee')
                const accessToken=jwt.sign({user},'secreteKey',{expiresIn:`${expire}s`})
               // console.log(accessToken)
                 req.header.token=accessToken
                // console.log(req.header,'sessioonnnnnnnnnnnnnnn2222222222222')
            res.json({user:'user'})
               } else {
                 // passwords do not match!
                 console.log("passwords do not match!")
                 return res.send({errors:"Passwords do not match!"})
               }
             //})
         }
         catch(err){
           return res.json("Error");
         }
     //  });
}

exports.log_out_get=(req,res,next)=>{
    req.header.token=undefined
    res.json({user:undefined})
    console.log('loggign out i think')
}

