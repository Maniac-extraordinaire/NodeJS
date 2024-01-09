const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

const app = express();

const rootDir = require("./util/paths");

app.set("view engine", "ejs");
app.set("views");

const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not found" });
});

app.listen(3000);
