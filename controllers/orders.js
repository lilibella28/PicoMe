const User = require("../models/user")
const Order = require("../models/orders")

function index(req, res){
    console.log(req.body)
        res.render("orders/index", {title: "home page"}) 
   
}

function show(req, res){
    res.render("orders/show")
}

function newAdd(req, res){

    res.render("orders/new")
}

function create(req, res){
    const order = new Order(req.body);
    order.save(function(err){
        console.log(err, " this err order");
        if(err) return res.redirect("/orders/new");
        console.log(order, "<= this a order")
        res.redirect("orders/new")
    })
    
}

module.exports = {
    index,
    show,
    new: newAdd,
    create,
}
