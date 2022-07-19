//var Post= require('../models/post');
//var Comments= require('../models/comments');
const pool=require("../db")


exports.venda_get=(req,res,next)=>{
  pool.query("SELECT * FROM venda").then(venda=>res.json({venda}))
  //Post.find({}).then(post=>res.json({post,errors:[],user:req.user}))
}

exports.venda_post=(req,res,next)=>{

        console.log(req.body,"bodyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        if(!req.user){
           return res.send("Need to be logged in to submit post")
        }
        console.log('Should not appear if not logged in')

                    pool.query("INSERT INTO venda (cliente,produto,valor,quantidade,status) VALUES ($1,$2,$3,$4,$5) ",
                    [req.body.cliente,req.body.produtos,req.body.valor,req.body.quantidade,req.body.status])
                    console.log('sucesso')
                  
      

    }



exports.venda_update=(req,res,next)=>{
   console.log(req.body.id)
   pool.query("UPDATE venda SET status = $1 WHERE venda_id = $2",["APROVADO",req.body.id]).then(venda=>res.json("Update com sucesso"))
}   






exports.venda_delete_post=(req,res,next)=>{
  
   // if(!req.user){
   //     return res.send("Need to be logged in to submit post")
    // }

    Post.findByIdAndDelete(req.body.postId,err=>{
         if(err){return next(err)}
        else {
            Post.find({}).then(result=>res.json(result))
            console.log("post deleted with sucesse")
            req.body.comment.map(coment=>{ Comments.findByIdAndDelete(coment._id,err=>{
                if(err){return next(err)}
                // else res.status(202).send("deleted with sucees")
                 console.log("comments deleted with sucesses")
             })
            })
            //res.status(202).send("deleted with sucees")

        }
     })
}


