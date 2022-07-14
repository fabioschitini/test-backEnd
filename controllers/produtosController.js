


exports.produto_get=(req,res,next)=>{
res.json({produto:'produtos'})
    //Post.find({}).then(post=>res.json({post,errors:[],user:req.user}))
}

exports.produto_post=(req,res,next)=>{

        console.log(req.body,"bodyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        if(!req.user){
           return res.send("Need to be logged in to submit post")
        }
        console.log('Should not appear if not logged in')
        
     //  let post=new Post({
      //      codigo:req.body.codigo,
       //    descricao:req.body.descricao,
       //    medida:req.body.medida,
       //    compra:req.body.compra,
        //   venda:req.body.venda
       // })  
    
               // post.save(err=>{
                  //  if(err){
                    console.log('sucesso')
                  //      res.send(err)
                  //      return next(err)}
                   // res.status(202).send("Succefully sent")
                //})
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


