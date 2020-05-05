module.exports = (app)=>{

    app.get('/noticia',(request,response)=>{

        const conn = app.config.db_con();
        const noticiasModel = new app.app.models.noticiasModel(conn)

        noticiasModel.getNoticia((erro, result)=>{

            if(erro){                
                response.render('noticias/noticia', { status : 'error', message : erro })                
            } else {
                response.render('noticias/noticia', { status : 'ok', noticia : result })                
            }    
                    
        })
        
    })

}

