module.exports = db => {
    return {
        create(req) {
            let cp = req.body;
            const {
                couponPerson,
                couponProduct
            } = cp
            return db.sequelize.transaction(async transaction => {
                    let Coupon = await db.Coupon.create(req.body, {
                        transaction: transaction
                    })
                    couponPerson.forEach(element => {
                        element.CouponId = Coupon.id
                    });
                    await db.couponPerson.bulkCreate(couponPerson, {
                        returning: true,
                        transaction: transaction
                    })
                    couponProduct.forEach(element => {
                        element.CouponId = Coupon.id
                    });
                    await db.couponProduct.bulkCreate(couponProduct, {
                        returning: true,
                        transaction: transaction
                    })
                    return {
                        data: Coupon
                    }
                })
                .then(Coupon => {
                    return {
                        status: 201,
                        data: Coupon
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
            return db.Coupon.findAll({
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(Coupon => {
                    return {
                        status: 201,
                        data: Coupon
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
            return db.Coupon.findById(req.params.id, {
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                })
                .then(Coupon => {
                    return {
                        status: 201,
                        data: Coupon
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
            return db.Coupon.update(req.body, {
                    where: {
                        id: req.query.id
                    }
                })
                .then(Coupon => {
                    return {
                        status: 201,
                        data: Coupon
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
            return db.Coupon.destroy({
                    where: {
                        id: id
                    }
                })
                .then(Coupon => {
                    return {
                        status: 201,
                        data: Coupon
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