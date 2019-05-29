module.exports = (sequelize, datatype) => {
    const couponProduct = sequelize.define('couponProduct', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });
    couponProduct.associate = (model) => {
        couponProduct.belongsTo(model.Product);
        couponProduct.belongsTo(model.Coupon);
    }
    return couponProduct;
}