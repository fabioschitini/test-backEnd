const pool=require("../db")


exports.produto_get=(req,res,next)=>{
    pool.query("SELECT * FROM produto").then(cliente=>res.json({cliente}))

    //Post.find({}).then(post=>res.json({post,errors:[],user:req.user}))
}

exports.produto_post=(req,res,next)=>{

        console.log(req.body,"bodyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        if(!req.user){
           return res.send("Need to be logged in to submit post")
        }
        console.log('Should not appear if not logged in')
 
                  //  if(err){
                    pool.query("INSERT INTO produto (codigo,descricao,medida,compra,venda) VALUES ($1,$2,$3,$4,$5) ",
                    [req.body.codigo,req.body.descricao,req.body.medida,req.body.compra,req.body.venda])

                    console.log('sucesso')
          
    }



exports.produto_details_get=(req,res,next)=>{
    res.json({produto:'produtos'})
   // console.log(req.user)
   // Post.findById(req.params.id).then(post=>res.send({post,errors:[],user:req.user}))
}   






exports.produto_delete_post=(req,res,next)=>{
  
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


