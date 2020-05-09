module.exports.noticia = function(app,request,response){

    const conn = app.config.db_con();
    const noticiasModel = new app.app.models.noticiasModel(conn)
    var id_noticia = request.query;

    noticiasModel.getNoticia(id_noticia, (erro, result)=>{

        if(erro){                
            response.render('noticias/noticia', { status : 'error', message : erro })                
        } else {
            response.render('noticias/noticia', { status : 'ok', noticia : result })                
        }    
                
    })

}

module.exports.noticias = function(app,request,response){

    const conn = app.config.db_con()
    const noticiasModel = new app.app.models.noticiasModel(conn)

    noticiasModel.getNoticias((erro, result)=>{

        if(erro){                
            response.render('noticias/noticias', { status : 'error', message : erro })                
        } else {
            response.render('noticias/noticias', { status : 'ok', noticias : result })                
        }    
                
    })

}