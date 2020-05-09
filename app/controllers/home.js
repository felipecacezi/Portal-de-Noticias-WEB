module.exports.home = function(app,request, response){

    

    var conn = app.config.db_con()
    const noticias_model = new app.app.models.noticiasModel(conn);

    noticias_model.getUltimasNoticias((erro,result)=>{        
        response.render('home/index', { 'ultimas_noticias' : result })
    });


}