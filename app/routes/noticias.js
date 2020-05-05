module.exports = (app)=>{

    app.get('/noticias',(request,response)=>{

        const conn = app.config.db_con()
        const noticiasModel = app.app.models.noticiasModel

        noticiasModel.getNoticias(conn, (erro, result)=>{

            if(erro){                
                response.render('noticias/noticias', { status : 'error', message : erro })                
            } else {
                response.render('noticias/noticias', { status : 'ok', noticias : result })                
            }    
                    
        })
        
        
    })

}

