'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes/')

//pug config
app.set('view engine', 'pug');

//sets a variable that the whole app can use
app.locals.company = 'Pizza Shack';
app.locals.body = {};
app.locals.errors = {};


//middlewares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.get('/order', (req, res, next) => {
	res.render('order', {page: 'Order'})
})

app.get('/login', (req, res, next) => {
	res.render('login', {page: 'Login'})
})

app.get('/register', (req, res, next) => {
	res.render('register', {page: 'Register'})
})

app.use((req, res) => {
	res.render('404');
})

//***************end of middlewares**************

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
