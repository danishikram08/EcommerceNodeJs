module.exports = (db) => {
    return {
        create(req) {
            return db.subCategory.create(req.body)
                .then(subCategory => {
                    return {
                        status: 201,
                        data: subCategory
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
            return db.subCategory.findAll({
                    where: {
                        id: req.query.id
                    },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(subCategory => {
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
            return db.subCategory.findById(req.params.id, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(subCategory => {
                    return {
                        status: 201,
                        data: subCategory
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
            return db.subCategory.update(req.body, {
                    where: {
                        id: req.query.id
                    }
                })
                .then(subCategory => {
                    return {
                        status: 201,
                        data: subCategory
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
            return db.subCategory.destroy({
                    where: {
                        id: id
                    }
                })
                .then(subCategory => {
                    return {
                        status: 201,
                        data: subCategory
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