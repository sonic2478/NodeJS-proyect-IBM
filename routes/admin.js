const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}); 

router.post('/add-product', (req, res, next)=> {
    const product = req.body.title;
    console.log(product);
    res.send(`<p>${product} added succesfully</p>`);
});

module.exports = router;