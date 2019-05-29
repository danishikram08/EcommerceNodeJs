module.exports = (sequelize, datatype) => {
    const productSales = sequelize.define('productSales', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: datatype.INTEGER(10)
        },
        fixedPrice: {
            type: datatype.INTEGER(10)
        }
    });
    productSales.associate = (model) => {
        productSales.belongsTo(model.Sales);
        productSales.belongsTo(model.Product);
    }
    return productSales;
}