module.exports = (sequelize, datatype) => {
    const Sales = sequelize.define('Sales', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        total: {
            type: datatype.INTEGER
        }
    });
    Sales.associate = (model) => {
        Sales.hasMany(model.productSales);
    }
    return Sales;
}