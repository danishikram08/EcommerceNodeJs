module.exports = (sequelize, datatype) => {
    const Product = sequelize.define('Product', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productTitle: {
            type: datatype.STRING(255)
        },
        productDescription: {
            type: datatype.STRING(255)
        },
        price: {
            type: datatype.INTEGER(10)
        }
    });
    Product.associate = (model) => {
        Product.hasMany(model.Image);
        Product.hasMany(model.productSales);
        Product.belongsTo(model.subCategory);
        Product.hasMany(model.couponProduct);
    }
    return Product;
}