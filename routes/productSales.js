module.exports = (app, services) => {
    const router = app.Router();
    const {
        productSales
    } = services;
    router.post('/', async (req, res) => {
        const result = await productSales.create(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAll', async (req, res) => {
        let result = await productSales.findAll(req);
        return res.status(result.status).json(result);
    });
    router.get('/findById/:id', async (req, res) => {
        let result = await productSales.findById(req);
        return res.status(result.status).json(result);
    });
    router.put('/update/:id', async (req, res) => {
        let result = await productSales.update(req);
        return res.status(result.status).json(result);
    });
    router.delete('/delete/:id', async (req, res) => {
        let result = await productSales.delete(req);
        return res.status(result.status).json(result);
    }); 
    router.get('/findAllProduct', async (req, res) => {
        let result = await productSales.findAllProduct(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAllSales', async (req, res) => {
        let result = await productSales.findAllSales(req);
        return res.status(result.status).json(result);
    });
    return router;
}