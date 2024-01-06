const express =require('express');

const bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views');

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

// app.get('/favicon.ico', (req, res) => res.status(204));

// app.use('/', (req, res, next)=>{
//     console.log('This always Runs!');
//     next();
// });

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, )));

app.use(('/admin'), adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000)