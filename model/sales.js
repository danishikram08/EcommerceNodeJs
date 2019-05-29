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
            type: datatype.FLOAT(11)
        },
        applyCoupon:{
            type:datatype.STRING(255)
        },
        fixedAmount:{
            type:datatype.FLOAT(11)
        }        
    });
    Sales.associate = (model) => {
        Sales.hasMany(model.productSales);
        Sales.belongsTo(model.Coupon);
    }
    return Sales;
}