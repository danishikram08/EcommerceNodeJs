module.exports = (sequelize, datatype) => {
    const subCategory = sequelize.define('subCategory', {
        id: {
            type: datatype.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        subCategoryTitle: {
            type: datatype.STRING
        }
    });
    subCategory.associate = (model) => {
        subCategory.belongsTo(model.Category);
        subCategory.hasMany(model.Product);

    }
    return subCategory;
}