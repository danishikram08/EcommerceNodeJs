module.exports = (app, controllers) => {
    const router = app.Router();
    const {
        Category
    } = controllers;
    router.post('/', async (req, res) => {
        const result = await Category.create(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAll', async (req, res) => {
        let result = await Category.findAll(req);
        return res.status(result.status).json(result);
    });
    router.get('/findById/:id', async (req, res) => {
        let result = await Category.findById(req);
        return res.status(result.status).json(result);
    });
    router.put('/update/:id', async (req, res) => {
        let result = await Category.update(req);
        return res.status(result.status).json(result);
    });
    router.delete('/delete/:id', async (req, res) => {
        let result = await Category.delete(req);
        return res.status(result.status).json(result);
    });
    return router;
}
