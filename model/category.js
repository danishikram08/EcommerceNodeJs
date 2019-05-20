module.exports = (sequelize, datatype) => {
    const Category = sequelize.define('Category', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoryTitle: {
            type: datatype.STRING
        }
    });
    return Category;
}