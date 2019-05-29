module.exports = (sequelize, datatype) => {
    const Person = sequelize.define('Person', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        personName: {
            type: datatype.STRING(255)
        },
        address: {
            type: datatype.STRING(255)
        }
    });

    Person.associate = (model) => {
        Person.hasMany(model.couponPerson);
    }
    return Person;
}