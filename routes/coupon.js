module.exports = (app, services) => {
    const router = app.Router();
    const {
        Coupon
    } = services;
    router.post('/', async (req, res) => {
        const result = await Coupon.create(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAll', async (req, res) => {
        let result = await Coupon.findAll(req);
        return res.status(result.status).json(result);
    });
    router.get('/findById/:id', async (req, res) => {
        let result = await Coupon.findById(req);
        return res.status(result.status).json(result);
    });
    router.put('/update/:id', async (req, res) => {
        let result = await Coupon.update(req);
        return res.status(result.status).json(result);
    });
    router.delete('/delete/:id', async (req, res) => {
        let result = await Coupon.delete(req);
        return res.status(result.status).json(result);
    });
    return router;
}