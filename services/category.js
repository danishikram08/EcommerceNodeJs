module.exports = (db) => {
    return {
        create(req) {
            return db.Category.create(req.body)
                .then(Category => {
                    return {
                        status: 201,
                        data: Category
                    };
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    };
                })
        },
        findAll(req) {
            return db.Category.findAll({
                    where: {
                        id: req.query.id
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(Category => {
                    return {
                        status: 201,
                        data: Category
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
            return db.Category.findById(req.params.id, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(Category => {
                    return {
                        status: 201,
                        data: Category
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
            const id = req.query.id;
            return db.Category.update(req.body, {
                    where: {
                        id: req.query.id
                    }
                })
                .then(Category => {
                    return {
                        status: 201,
                        data: Category
                    }
                })
                .catch(error => {
                    return {
                        status: 500,
                        error: error
                    }
                })
        },
        delete(req) {
            let id = req.query.id;
            return db.Category.destroy({
                    where: {
                        id: id
                    }
                })
                .then(Category => {
                    return {
                        status: 201,
                        data: Category
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