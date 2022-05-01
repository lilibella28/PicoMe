const Order = require('../models/orders');

function deleteItem(req, res, next) {
	Order.findOne({ 'items._id': req.params.id }, function (err, itemDocument) {
		const item = itemDocument.items.id(req.params.id);

		if (!item.user.equals(req.user._id)) return res.redirect(`/orders/${itemDocument._id}`);

		item.remove();

		itemDocument.save(function (err) {
			if (err) next(err);
			res.redirect(`/orders/${itemDocument._id}`);
		});
	});
}

function create(req, res) {
	Order.findById(req.params.id, function (err, orderDatabase) {
		req.body.user = req.user._id;
		req.body.userName = req.user.name;
		req.body.userAvatar = req.user.avatar;
		orderDatabase.items.push(req.body);
		orderDatabase.save(function (err) {
			console.log(orderDatabase, 'testin data order');
			res.redirect(`/orders/${orderDatabase._id}`);
		});
	});
}

module.exports = {
	create,
	delete: deleteItem,
};
