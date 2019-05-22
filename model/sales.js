module.exports = (sequelize, datatype) => {
    const Sales = sequelize.define('Sales', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: datatype.DATE
        },

        total: {
            type: datatype.FLOAT
        }
    });
    Sales.associate = (model) => {
        Sales.hasMany(model.productSales);
    }
    return Sales;
}