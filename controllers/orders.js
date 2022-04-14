const Order = require('../models/orders');
const Item = require('../models/groceryItems');

function index(req, res) {
	console.log(req.body);
	Order.find({}, function (err, orders) {
		res.render('orders/index', {
			orders,
			title: 'Help center',
		});
	});
}

function show(req, res) {
	Order.findById(req.params.id)
		.populate('userGrocery')
		.exec(function (err, order) {
			Item.find({ _id: { $nin: order.userGrocery } }, function (err, groceries) {
				console.log(groceries);
				res.render('orders/show', {
					title: 'Welcome to Pico',
					order: order,
					groceries: groceries,
				});
			});
		});
}

function newAdd(req, res) {
	res.render('orders/new', { title: 'Shopping Cart' });
}

function create(req, res) {
	const order = new Order(req.body);
	order.save(function (err) {
		console.log(err, ' this err order');
		if (err) return res.redirect('/orders/new');
		console.log(order, '<= this a order');
		res.redirect('orders/');
	});
}

module.exports = {
	index,
	show,
	new: newAdd,
	create,
};
