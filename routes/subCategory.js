module.exports = (app, services) => {
    const router = app.Router();
    const {
        subCategory
    } = services;
    router.post('/', async (req, res) => {
        const result = await subCategory.create(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAll', async (req, res) => {
        let result = await subCategory.findAll(req);
        return res.status(result.status).json(result);
    });
    router.get('/findById/:id', async (req, res) => {
        let result = await subCategory.findById(req);
        return res.status(result.status).json(result);
    });
    router.put('/update/:id', async (req, res) => {
        let result = await subCategory.update(req);
        return res.status(result.status).json(result);
    });
    router.delete('/delete/:id', async (req, res) => {
        let result = await subCategory.delete(req);
        return res.status(result.status).json(result);
    });
    return router;
}