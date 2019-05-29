module.exports = (app, services) => {
    const router = app.Router();
    const {
        couponProduct
    } = services;
    router.post('/', async (req, res) => {
        const result = await couponProduct.create(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAll', async (req, res) => {
        let result = await couponProduct.findAll(req);
        return res.status(result.status).json(result);
    });
    router.get('/findById/:id', async (req, res) => {
        let result = await couponProduct.findById(req);
        return res.status(result.status).json(result);
    });
    router.put('/update/:id', async (req, res) => {
        let result = await couponProduct.update(req);
        return res.status(result.status).json(result);
    });
    router.delete('/delete/:id', async (req, res) => {
        let result = await couponProduct.delete(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAllcoupon', async (req, res) => {
        let result = await couponProduct.findAllProduct(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAllproduct', async (req, res) => {
        let result = await couponProduct.findAllSales(req);
        return res.status(result.status).json(result);
    });
    return router;
}