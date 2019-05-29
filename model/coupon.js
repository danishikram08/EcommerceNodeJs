module.exports = (sequelize, datatype) => {
    const Coupon = sequelize.define('Coupon', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        couponTitle: {
            type: datatype.STRING(255)
        },
        couponDescription: {
            type: datatype.STRING(255)
        },
        discount: {
            type: datatype.INTEGER(11)
        },
        discountType: {
            type: datatype.STRING(255)
        },
        flatDiscount: {
            type: datatype.INTEGER(11)
        },
        expireFrom: {
            type: datatype.DATE
        },
        expireTo: {
            type: datatype.DATE
        },
        isActive: {
            type: datatype.BOOLEAN(1),
            defaullt: true
        }
    });
    Coupon.associate = (model) => {
        Coupon.hasMany(model.Sales);
        Coupon.hasMany(model.couponPerson);
        Coupon.hasMany(model.couponProduct);


    }
    return Coupon;
}