module.exports = (db) => {
    return {
        create(req) {
            return db.Product.create(req.body)
                .then(Product => {
                    file = req.files
                    file.forEach(Images => {
                        Images.ProductId = Product.id
                        Images.filePath = Images.path
                    })
                    db.Image.bulkCreate(file, {
                            returning: true
                        }).then(file => {
                            return {
                                status: 201,
                                data: file
                            }
                        })
                        .catch(error => {
                            return {
                                status: 500,
                                error: error
                            }
                        })
                    return {
                        status: 201,
                        data: Product
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
            return db.Product.findAll({
                    include: {
                        model: db.Image
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })

                .then(Product => {
                    const oldUrl = req.protocol + "://" + req.headers.host

                    if (Product) {

                        Product.forEach(Product => {
                            if (Product.Images.length) {
                                Product.Images.forEach(image => {
                                    image.filePath = oldUrl + '/' + image.filePath;
                                });
                            }
                        });
                    }

                    return {
                        status: 201,
                        data: Product
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
            return db.Product.findByPk(req.params.id, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(Product => {
                    return {
                        status: 201,
                        data: Product
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
            return db.Product.update(req.body, {
                    where: {
                        id: req.params.id
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
        delete(req) {
            let id = req.params.id;
            return db.Product.destroy({
                    where: {
                        id: id
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
        }
    }
}