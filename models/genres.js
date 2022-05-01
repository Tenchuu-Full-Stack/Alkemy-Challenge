module.exports = (sequelize, type) => {
    return sequelize.define('genre', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        imagen: type.STRING,
        peliculasAsociadas: type.INTEGER
        
    })
}

