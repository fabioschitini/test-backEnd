
var express = require('express');
var router = express.Router();
const jwt=require('jsonwebtoken')
const userController=require('../controllers/userController')
const vendaController=require('../controllers/vendaController')
const produtosController=require('../controllers/produtosController')
const clienteController=require('../controllers/clienteController')

/* GET home page. */

 

  function authenticateToken(req,res,next){
    let token;
token=req.header.token
console.log(token,'token mate')
//next()
if(!token) {return res.json({user:undefined})}
jwt.verify(token,'secreteKey',(err,user)=>{
   if(err) return res.json({user:undefined})
   req.user=user
   console.log('next')
   next()
})
}

  router.get('/',(req,res)=>{
    res.json({Welcome:"Welcome to my API"})
  });



  router.get('/test',(req,res)=>{
    res.json("Bem vindo ao meu API")
  });

  router.get('/login',authenticateToken,userController.log_in_get);
  router.post("/login",userController.log_in_post)
  router.post("/signIn",userController.sign_in_post)
  router.get('/logout',userController.log_out_get); 
  router.get("/venda",vendaController.venda_get); 
  router.post("/venda",authenticateToken,vendaController.venda_post);
  router.put("/venda",authenticateToken,vendaController.venda_update);
  router.get("/cliente",clienteController.cliente_get);
  router.post("/cliente",authenticateToken,clienteController.cliente_post);
 router.get("/produto",produtosController.produto_get); 
  router.post("/produto",authenticateToken,produtosController.produto_post);


module.exports = router;
