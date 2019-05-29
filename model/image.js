module.exports = (sequelize, datatype) => {
    const Image = sequelize.define('Image', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        filePath: {
            type: datatype.STRING(255)
        }
    });
    Image.associate = (model) => {
        Image.belongsTo(model.Product)
    }
    return Image;
}