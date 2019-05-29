const db = require('../model/index.js');
module.exports = {
    Product: require('./product.js')(db),
    Image: require('./image.js')(db),
    Category: require('./category.js')(db),
    subCategory: require('./subCategory.js')(db),
    Sales: require('./sales.js')(db),
    productSales: require('./productSales')(db),
    Coupon: require('./coupon.js')(db),
    Person: require('./person.js')(db),
    couponPerson: require('./couponPerson.js')(db),
    couponProduct: require('./couponProduct.js')(db)
}