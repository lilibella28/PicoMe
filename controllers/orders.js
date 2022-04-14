const Order = require('../models/orders');


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
	Order.findById(req.params.id, function(err,order ){
		res.render('orders/show', {
			title: 'Welcome to Pico',
			order: order,
			// groceries: groceries,
		});
	})
	
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
		res.redirect(`orders/${order._id}`);
	});
}

module.exports = {
	index,
	show,
	new: newAdd,
	create,
};
