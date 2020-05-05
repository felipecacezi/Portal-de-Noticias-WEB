module.exports = (app)=>{

    app.get('/formulario_inclusao_noticia',(request,response)=>{
        response.render('admin/form_add_noticia')
    })

    app.post('/noticias/salvar',(request,response)=>{

        let noticia_dados = request.body
        const conn = app.config.db_con()
        const noticiaModel = app.app.models.noticiaModel

        noticiaModel.salvarNoticia(noticia_dados, conn, (erro, result)=>{
            
            response.redirect('/noticias')                
                    
        })
       
    })

}