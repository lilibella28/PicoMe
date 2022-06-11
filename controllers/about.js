const Contacts = require("../models/contact")


function about(req, res){
     res.render('orders/about',  {
          title: 'Welcome to PicoMe',
        
          // groceries: groceries,
     })
      
     
}

// A function to allow the user to send their contact information
//  firstName: String,
// lastName: String,
// city: String,
// state: String,
// zipCode: Number,
// message: String
function create(req, res){
    const contact = new Contacts(req.body);
    contact.save(function(err){
         if(err) return res.redirect('/contact')
         res.redirect('/orders')
    })
}

module.exports = {
     about,
     create
};