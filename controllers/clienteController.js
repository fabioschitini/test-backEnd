//const pool=require("../db")
const pool=require("../config")

exports.cliente_get=(req,res,next)=>{

  pool.query("SELECT * FROM cliente").then(cliente=>res.json({cliente}))
}

exports.cliente_post=(req,res,next)=>{

        console.log(req.body,"bodyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        if(!req.user){
           return res.send("Need to be logged in to submit post")
        }
        console.log('Should not appear if not logged in')
        
                    console.log('sucesso')
                pool.query("INSERT INTO cliente (razao,cnpj,endereco) VALUES ($1,$2,$3) ",
                [req.body.razao,req.body.cnpj,req.body.endereco])

    }



exports.cliente_details_get=(req,res,next)=>{
    res.json({cliente:'clientes'})
}   


exports.post_delete_post=(req,res,next)=>{

    Post.findByIdAndDelete(req.body.postId,err=>{
         if(err){return next(err)}
        else {
            Post.find({}).then(result=>res.json(result))
            console.log("post deleted with sucesse")
            req.body.comment.map(coment=>{ Comments.findByIdAndDelete(coment._id,err=>{
                if(err){return next(err)}
                 console.log("comments deleted with sucesses")
             })
            })
        }
     })
}


