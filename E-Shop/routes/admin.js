const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/paths');

const { log } = require('console');

const products =[];

// /admin/add-product => GET
router.get('/add-product', (req, res, next)=>{
    res.render('add-product', {pageTitle:'Add Product', path:'/admin/add-product'});
});

// router.get('/add-product', (req, res, next)=>{
//     res.sendFile(path.join(__dirname,'../','views', 'add-product.html'));
// });


// /admin/add-product => POST

// router.post('/product', (req, res, next) => {
//     products.push({ title: req.body.title });
//     res.redirect('/');
// })

router.post('/product', (req, res, next) => {
    const {body} = req
    Object.entries(body).map(([key, value]) => {
        products.push({[key]: value});
    })
    console.log(products);
    res.redirect('/');
})


exports.routes = router;
exports.products = products;