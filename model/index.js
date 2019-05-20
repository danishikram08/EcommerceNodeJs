const env = require('../bin/env.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = require('../model/product.js')(sequelize, Sequelize);
db.Image = require('../model/image.js')(sequelize, Sequelize);
db.Category = require('../model/category.js')(sequelize, Sequelize);
db.subCategory = require('../model/subCategory.js')(sequelize, Sequelize);
db.Sales = require('../model/sales.js')(sequelize, Sequelize);
db.productSales = require('../model/productsales.js')(sequelize, Sequelize);

if (db.Product.associate) {
    db.Product.associate(db);
}
if (db.Image.associate) {
    db.Image.associate(db);
}
if (db.Category.associate) {
    db.Category.associate(db);
}
if (db.subCategory.associate) {
    db.subCategory.associate(db);
}
if (db.Sales.associate) {
    db.Sales.associate(db);
}
if (db.productSales.associate) {
    db.productSales.associate(db);
}

module.exports = db;