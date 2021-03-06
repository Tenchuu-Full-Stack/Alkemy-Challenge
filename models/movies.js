module.exports = (sequelize, type) => {
    return sequelize.define('movie', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: type.STRING,
        imagen: type.STRING,
        fechaDeCreacion: type.DATE,
        calificacion: type.STRING
    })
}