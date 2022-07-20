const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')
require('dotenv').config()
//const pool=require("../db")
const pool=require("../config")



exports.sign_in_post=(req,res,next)=>{
  console.log('post sign ing')
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    console.log(hashedPassword,"hased pasworddddddddddddddd")

    pool.query("INSERT INTO usuario (name,username,password) VALUES ($1,$2,$3) ",
    [req.body.name,req.body.username,hashedPassword]).then(result=>res.json("Sucesso em cadastrar"))
  })
 console.log("Cadastrado com sucesso")
}

exports.log_in_get=(req,res,next)=>{
    console.log(req.user,'dsdaasdadsa')
    res.json({user:req.user})
}

exports.log_in_post=async (req,res,next)=>{
         try{
          const userArray= await pool.query("SELECT * FROM usuario")
          console.log('user', userArray.rows.filter(user=>user.username===req.body.username))
  
let usuario=userArray.rows.filter(user=>user.username===req.body.username)
           if (!usuario[0]) {
             console.log("Username not found")
            return res.send({errors:"Username not found"})
           }
           console.log("Indo comparar passwordss")
           console.log('password',req.body.password)
          bcrypt.compare(req.body.password,usuario[0].password, (err, ress) => { 
            if (ress) {
              console.log("passwords match! log user in")
             let expire=3600  
             let user=req.body.username
             console.log(user,'userrrrrrrrnameeeeeeeeee')
             const accessToken=jwt.sign({user},'secreteKey',{expiresIn:`${expire}s`})
              req.header.token=accessToken
         res.json({user:'user'})
            } else {
           
              console.log("passwords do not match!")
              return res.send({errors:"Passwords do not match!"})
            }
          })
           
         }
         catch(err){
           return res.json("Error");
         }
}

exports.log_out_get=(req,res,next)=>{
    req.header.token=undefined
    res.json({user:undefined})
    console.log('loggign out i think')
}

