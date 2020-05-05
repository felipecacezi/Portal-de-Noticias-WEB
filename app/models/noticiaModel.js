module.exports = () => {

    this.getNoticia = (conn, callback) => {
        conn.query('select * from noticias where id_noticia = 1', callback)
    }

    this.salvarNoticia = (noticia_dados, conn, callback) => {
        conn.query(`insert into noticias (titulo, noticia) values ('${noticia_dados.titulo}', '${noticia_dados.noticia}')`, callback)
    }

    return this;

}