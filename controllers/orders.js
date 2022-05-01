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
			title: 'Welcome to PicoMe',
			order: order,
			// groceries: groceries,
		});
		
	})
	
}

function newAdd(req, res) {
	res.render('orders/new', { title: 'Welcome to PicoMe' });
}

function create(req, res) {
	req.body.user = req.user._id
	const order = new Order(req.body);
	order.save(function (err) {
		console.log(err, ' this err order');
		if (err) return res.redirect('/orders/new');
		console.log(order, '<= this a order');
		res.redirect(`orders/${order._id}`);
	});
}


module.exports = {
	// finalShow,
	index,
	show,
	new: newAdd,
	create,

};
