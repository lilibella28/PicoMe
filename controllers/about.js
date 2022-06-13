const Contacts = require("../models/contact")
const {sendContact} = require("./contact")
const {sendContactToMe} = require("./contact")
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
     //send the contactt data to the function
         sendContact(contact.email, contact.firstName)
         sendContactToMe(contact.email, contact.firstName, contact.lastName, contact.message)

         console.log(contact.firstName)
         if(err) return res.redirect('/contact')
         res.redirect('/orders')
    })
}

module.exports = {
     about,
     create
};