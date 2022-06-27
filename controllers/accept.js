const Order = require('../models/orders');

function accept(req, res) {
	res.render('orders/accept', {
        title: 'Welcome to PicoMe',
        
        
	});
}

function create(req, res) {
	//  I need to find the user by iid
	Order.findById(req.params.id, function (err, orderDatabase) {
        
		req.body.message = req.user.message;
		orderDatabase.items.push(req.body);
		orderDatabase.save(function (err) {
			res.redirect(`/orders/${orderDatabase._id}`);
		});
	});
}

module.exports = {
	accept,
	create,
};
