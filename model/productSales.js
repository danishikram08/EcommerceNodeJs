module.exports = (sequelize, datatype) => {
    const productSales = sequelize.define('productSales', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        price: {
            type: datatype.INTEGER
        },
        quantity: {
            type: datatype.INTEGER
        }
    });
    productSales.associate = (model) => {
        productSales.belongsTo(model.Sales);
        productSales.belongsTo(model.Product);
    }
    return productSales;
}