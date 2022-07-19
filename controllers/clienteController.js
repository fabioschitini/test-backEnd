const pool=require("../db")

exports.cliente_get=(req,res,next)=>{

  pool.query("SELECT * FROM cliente").then(cliente=>res.json({cliente}))
    //Post.find({}).then(post=>res.json({post,errors:[],user:req.user}))
}

exports.cliente_post=(req,res,next)=>{

        console.log(req.body,"bodyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        if(!req.user){
           return res.send("Need to be logged in to submit post")
        }
        console.log('Should not appear if not logged in')
        
 

   //     if( cnpj ja existe){  
          //console.log(errors)
        //    res.send({post,errors:errors.array(),user:req.user})
       // }
       // else{
               // post.save(err=>{
                  //  if(err){
                    console.log('sucesso')
                pool.query("INSERT INTO cliente (razao,cnpj,endereco) VALUES ($1,$2,$3) ",
                [req.body.razao,req.body.cnpj,req.body.endereco])

                   // res.json({cliente:'clientes no posttt'})
                  //      res.send(err)
                  //      return next(err)}
                   // res.status(202).send("Succefully sent")
                //})
        //} 

    }



exports.cliente_details_get=(req,res,next)=>{
    res.json({cliente:'clientes'})
}   






exports.post_delete_post=(req,res,next)=>{
  
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


