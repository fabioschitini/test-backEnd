//var Post= require('../models/post');
//var Comments= require('../models/comments');


exports.venda_get=(req,res,next)=>{
res.json({venda:'venda'})
    //Post.find({}).then(post=>res.json({post,errors:[],user:req.user}))
}

exports.venda_post=(req,res,next)=>{

        console.log(req.body,"bodyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        if(!req.user){
           return res.send("Need to be logged in to submit post")
        }
        console.log('Should not appear if not logged in')
        
      // let post=new Post({
        //    cliente:req.body.cliente,
        //   produto:req.body.produto,
         //  valor:req.body.valor,
        //   quantidade:req.body.quantidade,
        //   status:req.body.status,
        //})  
   //     if( preco de venda e menor que o preco de venda definido){  
          //console.log(errors)
        //    res.send({post,errors:errors.array(),user:req.user})
       // }
       // else{
               // post.save(err=>{
                  //  if(err){
                    console.log('sucesso')
                  
                  //      res.send(err)
                  //      return next(err)}
                   // res.status(202).send("Succefully sent")
                //})
        //} 

    }



exports.venda_details_get=(req,res,next)=>{
   // Post.findById(req.params.id).then(post=>res.send({post,errors:[],user:req.user}))
   res.json({venda:'venda'})

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


