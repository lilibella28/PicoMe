const Order = require("../models/orders");
const Item = require("../models/groceryItems")
module.exports = {
  new: newGrocery,
  create,
  addGrocery,
};

function create(req, res) {
  Item.create(req.body, function(err,groceryItems ){
    console.log(groceryItems)
    res.redirect("./groceries/new")
  })
}

function newGrocery(req, res){
  Item.find({}, function(err, groceryItems){
    res.render('./groceries/new', {
     
      groceryItems
    })
  })
}

 function addGrocery(req, res){

    Order.findById(req.params.id, function(err, orderDocs){

      orderDocs.userGrocery.push(req.body.groceryItemsId);

      orderDocs.save(function(err){
        res.redirect(`/orders/${orderDocs._id}`)
      })
    })
 }