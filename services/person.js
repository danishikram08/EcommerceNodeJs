module.exports = (db) => {
    return {
        create(req) {
            return db.Person.create(req.body)
                .then(Person => {
                    return {
                        status: 201,
                        data: Person
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
            return db.Person.findAll({
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
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
        },
        findById(req) {
            return db.Person.findById(req.params.id, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
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
        },

        update(req) {
            return db.Person.update(req.body, {
                    where: {
                        id: req.query.id
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
        },
        delete(req) {
            let id = req.query.id;
            return db.Person.destroy({
                    where: {
                        id: id
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