module.exports = db  => {
    return {
        create(req) {
            couponPerson = req.body;
            return db.couponPerson.create(couponPerson)
                .then(couponPerson => {
                    return {
                        status: 201,
                        data: couponPerson
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
            return db.couponPerson.findAll({

                    include: [{
                            model: db.Coupon
                        },
                        {
                            model: db.Person
                        }
                    ],
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(couponPerson => {
                    return {
                        status: 201,
                        data: couponPerson
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
                        model: db.couponPerson,
                        include: [{
                            model: db.Person
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
            return db.Person.findAll({
                    include: [{
                        model: db.couponPerson,
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