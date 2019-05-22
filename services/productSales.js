module.exports = db => {
    return {
        create(req) {
            return db.productSales.create(req.body)
                .then(productSales => {
                    return {
                        status: 201,
                        data: productSales
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
            return db.productSales.findAll({

                    include: [{
                            model: db.Product
                        },
                        {
                            model: db.Sales
                        }
                    ],
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(productSales => {
                    return {
                        status: 201,
                        data: productSales
                    };
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    };
                });
        },
        findAllProduct(req) {
            return db.Product.findAll({

                    include: [{
                        model: db.productSales,
                        include: [{
                            model: db.Sales
                        }]
                    }],
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(Product => {
                    return {
                        status: 201,
                        data: Product
                    };
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    };
                });
        },
        findAllSales(req) {
            return db.Sales.findAll({
                    include: [{
                        model: db.productSales,
                        include: [{
                            model: db.Product
                        }]
                    }],
                    attributes: {
                        exclude: ["createdAt", "updatedAT"]
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
        }
    }
}