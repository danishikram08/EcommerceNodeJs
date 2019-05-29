module.exports = (app, services) => {
    const router = app.Router();
    const {
        Person
    } = services;
    router.post('/', async (req, res) => {
        const result = await Person.create(req);
        return res.status(result.status).json(result);
    });
    router.get('/findAll', async (req, res) => {
        let result = await Person.findAll(req);
        return res.status(result.status).json(result);
    });
    router.get('/findById/:id', async (req, res) => {
        let result = await Person.findById(req);
        return res.status(result.status).json(result);
    });
    router.put('/update/:id', async (req, res) => {
        let result = await Person.update(req);
        return res.status(result.status).json(result);
    });
    router.delete('/delete/:id', async (req, res) => {
        let result = await Person.delete(req);
        return res.status(result.status).json(result);
    });
    return router;
}