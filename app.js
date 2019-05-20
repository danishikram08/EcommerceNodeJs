const express = require('express');
const multer = require('multer');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage
});
const routers = require('./routes')(express, upload);
app.use('/products', routers.products);
app.use('/images', routers.images);
app.use('/category', routers.category);
app.use('/subCategory', routers.subCategory);
app.use('/sales', routers.sales);
app.use('/productSales', routers.productSales);

const publicDir = require('path').join(__dirname);
app.use(express.static(publicDir));
module.exports = app;