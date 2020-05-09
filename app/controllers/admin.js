module.exports.formulario_inclusao_noticia = function(app,request,response){

    response.render('admin/form_add_noticia', { 'validacao' : {}, 'dados_formulario' : {} })

}

module.exports.noticias_salvar = function(app,request,response){

    let noticia_dados = request.body

    request.assert('titulo', 'Título é obrigatório').notEmpty()
    request.assert('resumo', 'Resumo é obrigatório').notEmpty()
    request.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100)
    request.assert('autor', 'Autor é obrigatório').notEmpty()
    request.assert('data_noticia', 'Data da noticia é obrigatório').notEmpty().isDate({format : 'YYYY-MM-DD'})
    request.assert('noticia', 'Noticia é obrigatório').notEmpty()

    let errors = request.validationErrors()

    if(errors){
        response.render('admin/form_add_noticia', { 'validacao' : errors, 'dados_formulario' : noticia_dados })
        return
    }
    

    const conn = app.config.db_con()
    const noticiasModel = new app.app.models.noticiasModel(conn)

    noticiasModel.salvarNoticia(noticia_dados,(erro, result)=>{
        
        response.redirect('/noticias')                
                
    })

}