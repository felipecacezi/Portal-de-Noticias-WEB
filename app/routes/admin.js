module.exports = (app)=>{

    app.get('/formulario_inclusao_noticia',(request,response)=>{
        response.render('admin/form_add_noticia')
    })

    app.post('/noticias/salvar',(request,response)=>{

        let noticia_dados = request.body
        const conn = app.config.db_con()
        const noticiasModel = new app.app.models.noticiasModel(conn)

        noticiasModel.salvarNoticia(noticia_dados,(erro, result)=>{
            
            response.redirect('/noticias')                
                    
        })
       
    })

}