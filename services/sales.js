module.exports = (db) => {
    return {
        create(req) {
            let productSale = req.body.productSales
            let total=0;
            productSale.forEach(element => {
                total += element.fixedPrice * element.quantity;
            });
            req.body.total =total
            return db.Sales.create(req.body, {
                    include: {
                        model: db.productSales
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