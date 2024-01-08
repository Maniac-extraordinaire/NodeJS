const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/paths");

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// /admin/add-product => POST

router.post("/added-product", (req, res, next) => {
  const { body } = req;
  Object.entries(body).map(([key, value]) => {
    products.push({ [key]: value });
  });
  console.log(products);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
