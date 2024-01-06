const path = require('path');

const rootDir = require('../util/paths'); 

const express = require('express');
const { products } = require('./admin');

const router = express.Router();

const adminData = require('./admin')

router.get('/', (req, res, next)=>{
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'});
});

module.exports = router;