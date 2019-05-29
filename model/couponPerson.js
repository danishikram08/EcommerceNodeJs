module.exports = (sequelize, datatype) => {
    const couponPerson = sequelize.define('couponPerson', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });
    couponPerson.associate = (model) => {
        couponPerson.belongsTo(model.Person);
        couponPerson.belongsTo(model.Coupon);
    }
    return couponPerson;
}