'use strict';

const { bookshelf } = require('../db/database');

// require('./size');
// require('./topping')

const Order = bookshelf.Model.extend(
	{
	tableName: 'orders'
	},
	{
		//personal properties
		getSizes : () => knex('sizes'),
		getToppings : () => knex('toppings')
	}
	);

module.exports = Order;
