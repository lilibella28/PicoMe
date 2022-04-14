const Order = require("../models/orders");


module.exports = {
    create,
    delete: deleteItem
}


function create(req, res){
    Order.findById(req.params.id, function(err, orderDatabase){
        req.body.username = req.user.name
        orderDatabase.items.push(req.body);
        orderDatabase.save(function(err){
            console.log(orderDatabase);
            res.redirect(`/orders/${orderDatabase._id}`)
        })
    })
}


function deleteItem(){

    Order.findOne({"orders._id": req.params.id}), function(err, orderDocument){
        const order = orderDocument.reviews.id(req.params.id);
        if(!order.user.equals(req.user._id)) return res.redirect(`/orders/${orderDocument._id}`)
        order.remove()

        orderDocument.save(function(err){
            if(err) next(err);
            res.redirect(`/orders/${orderDocument._id}`)
        })
    }
}