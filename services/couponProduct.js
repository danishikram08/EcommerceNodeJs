module.exports = db => {
    return {
        create(req) {
            couponProduct = req.body;
            return db.couponProduct.create(couponProduct)
                .then(couponProduct => {
                    return {
                        status: 201,
                        data: couponProduct
                    };
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    };
                });

        },
        findAll(req) {
            return db.couponProduct.findAll({

                    include: [{
                            model: db.Coupon
                        },
                        {
                            model: db.Product
                        }
                    ],
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(couponProduct => {
                    return {
                        status: 201,
                        data: couponProduct
                    };
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    };
                });
        },
        findAllcoupon(req) {
            return db.Coupon.findAll({

                    include: [{
                        model: db.couponProduct,
                        include: [{
                            model: db.Product
                        }]
                    }],
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(Coupon => {
                    return {
                        status: 201,
                        data: Coupon
                    };
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    };
                });
        },
        findAllperson(req) {
            return db.Product.findAll({
                    include: [{
                        model: db.couponProduct,
                        include: [{
                            model: db.Coupon
                        }]
                    }],
                    attributes: {
                        exclude: ["createdAt", "updatedAT"]
                    }
                })
                .then(Person => {
                    return {
                        status: 201,
                        data: Person
                    }
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    }
                })
        }
    }
}