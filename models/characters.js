module.exports = (sequelize, type) => {
    return sequelize.define('character', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        edad: type.STRING,
        peso: type.STRING,
        historia: type.STRING,
        imagen: type.STRING,
        peliculasAsociadas: type.INTEGER
        
    })
}
