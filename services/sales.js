module.exports = db => {
    return {
        create(req) {
            const {
                coupon,date
            } = req.body;
            let sales = req.body
            let productSale = req.body.productSales
            let total = 0;
            productSale.forEach(element => {
                total += element.fixedPrice * element.quantity;
            });
            req.body.total = total
            coupon.forEach(element => {
                const {
                    discount,
                    flatDiscount,
                    expireTo
                } = element;
                element.discount = discount / 100;
                element.flatDiscount = flatDiscount / 100;
                if (!element.flatDiscount &&  expireTo!= date && element.isActive!=0) {
                    let fixedTotal = 0;
                    sales.CouponId = element.CouponId
                    fixedTotal += sales.total * element.discount;
                    sales.fixedAmount = sales.total - fixedTotal;
                } else{
                    let fixedTotal = 0;
                    sales.CouponId = element.CouponId
                    fixedTotal += sales.total * element.flatDiscount;
                    sales.fixedAmount = sales.total - fixedTotal;
                }
            });
            return db.Sales.create(req.body, {
                    include: [{
                        model: db.productSales
                    }, {
                        model: db.Coupon
                    }]
                })
                .then(Sales => {
                    return {
                        status: 201,
                        data: Sales
                    }
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    }
                })
        },
        findAll(req) {
            return db.Sales.findAll({
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })

                .then(Sales => {
                    return {
                        status: 201,
                        data: Sales
                    }
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    }
                })
        },
        findById(req) {
            return db.Sales.findByPk(req.params.id, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(Sales => {
                    return {
                        status: 201,
                        data: Sales
                    }
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    }
                })
        },
        update(req) {
            const id = req.params.id;
            const {
                quantity,
                price
            } = req.body;
            req.body.total = quantity * price;
            return db.Sales.update(req.body, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(Sales => {
                    return {
                        status: 201,
                        data: Sales
                    };
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    };
                });
        },
        delete(req) {
            let id = req.params.id;
            return db.Sales.destroy({
                    where: {
                        id: id
                    }
                })
                .then(Sales => {
                    return {
                        status: 201,
                        data: Sales
                    };
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    };
                });
        }
    }
}