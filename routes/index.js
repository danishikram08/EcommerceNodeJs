const routes = {}
module.exports = (app, upload) => {
    const services = require('../services/index.js');
    routes.products = require('./product.js')(app, upload, services);
    routes.images = require('./image.js')(app, upload, services);
    routes.category = require('./category.js')(app, services);
    routes.subCategory = require('./subCategory.js')(app, services);
    routes.sales = require('./sales.js')(app, services);
    routes.productSales = require('./productSales')(app, services);
    routes.coupons = require('./coupon.js')(app, services);
    routes.persons = require('./person.js')(app, services);
    routes.couponPerson = require('./couponPerson.js')(app, services);
    routes.couponProduct = require('./couponProduct.js')(app,services);
    return routes;
}