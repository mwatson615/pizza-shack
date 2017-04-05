'use strict';

const Contact = require('../models/contact');

module.exports.show = (req, res) => {
	res.render('contact', {page: 'Contact'})
};

module.exports.addContact = ({body}, res, err) => {
	Contact.forge(body)
	.save()
	.then(() => {
		return res.redirect('/')
	})
	.catch(err)
};
