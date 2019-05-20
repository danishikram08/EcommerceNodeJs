const db = require('../model/index.js');
module.exports = {
    Product: require('./product.js')(db),
    Image: require('./image.js')(db),
    Category: require('./category.js')(db),
    subCategory: require('./subCategory.js')(db),
    Sales: require('./sales.js')(db),
    productSales:require('./productSales')(db)

}