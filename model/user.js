module.exports = (sequelize, datatype) => {
    const User = sequelize.define('User', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: datatype.STRING
        },
        email: {
            type: datatype.STRING
        },
        password: {
            type: datatype.STRING
        },

       role: {
            type: datatype.STRING,
        }
    });

    User.associate = (model) => {
      
    }
    return User;
}