module.exports = (app, services) => {
    const router = app.Router();
    const {
        Sales
    } = services;
    router.post('/', async (req, res) => {
        const result = await Sales.create(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAll', async (req, res) => {
        let result = await Sales.findAll(req);
        return res.status(result.status).json(result);
    });
    router.get('/findById/:id', async (req, res) => {
        let result = await Sales.findById(req);
        return res.status(result.status).json(result);
    });
    router.put('/update/:id', async (req, res) => {
        let result = await Sales.update(req);
        return res.status(result.status).json(result);
    });
    router.delete('/delete/:id', async (req, res) => {
        let result = await Sales.delete(req);
        return res.status(result.status).json(result);
    });
    return router;
}