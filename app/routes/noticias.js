module.exports = (app)=>{

    app.get('/noticias',(request,response)=>{

        const conn = app.config.db_con()
        const noticiasModel = new app.app.models.noticiasModel(conn)

        noticiasModel.getNoticias((erro, result)=>{

            if(erro){                
                response.render('noticias/noticias', { status : 'error', message : erro })                
            } else {
                response.render('noticias/noticias', { status : 'ok', noticias : result })                
            }    
                    
        })
        
        
    })

}

