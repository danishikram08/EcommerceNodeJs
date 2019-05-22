module.exports = (sequelize, datatype) => {
    const Product = sequelize.define('Product', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productTitle: {
            type: datatype.STRING
        },
        productDescription: {
            type: datatype.STRING
        }
        ,
        price: {
            type: datatype.INTEGER
        }
    });
    Product.associate = (model) => {
        Product.hasMany(model.Image);
        Product.hasMany(model.productSales);
        Product.belongsTo(model.subCategory);
    }
    return Product;
}