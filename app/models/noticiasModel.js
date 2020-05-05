function Noticias(conn){
    this._conn = conn;
}

Noticias.prototype.getNoticias =  function (callback){
    this._conn.query('select * from noticias', callback)
}

Noticias.prototype.getNoticia = function (callback){
    this._conn.query('select * from noticias where id_noticia = 1', callback)
}

Noticias.prototype.salvarNoticia = function (noticia_dados, callback){
    this._conn.query(`insert into noticias (titulo, noticia) values ('${noticia_dados.titulo}', '${noticia_dados.noticia}')`, callback)
}

module.exports = ()=>{
    return Noticias;
}