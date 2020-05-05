module.exports = () => {

    this.getNoticias = (conn, callback) => {
        conn.query('select * from noticias', callback)
    }

    return this;

}