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
    this._conn.query(`insert into noticias set ? `, noticia_dados, callback)
}

module.exports = ()=>{
    return Noticias;
}