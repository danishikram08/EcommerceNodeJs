module.exports = (app, services) => {
    const router = app.Router();
    const {
        couponPerson
    } = services;
    router.post('/', async (req, res) => {
        const result = await couponPerson.create(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAll', async (req, res) => {
        let result = await couponPerson.findAll(req);
        return res.status(result.status).json(result);
    });
    router.get('/findById/:id', async (req, res) => {
        let result = await couponPerson.findById(req);
        return res.status(result.status).json(result);
    });
    router.put('/update/:id', async (req, res) => {
        let result = await couponPerson.update(req);
        return res.status(result.status).json(result);
    });
    router.delete('/delete/:id', async (req, res) => {
        let result = await couponPerson.delete(req);
        return res.status(result.status).json(result);
    }); 
    router.get('/findAllcoupon', async (req, res) => {
        let result = await couponPerson.findAllProduct(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAllperson', async (req, res) => {
        let result = await couponPerson.findAllSales(req);
        return res.status(result.status).json(result);
    });
    return router;
}