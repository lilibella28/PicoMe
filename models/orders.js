const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create models for the orders



const orderSchema = new Schema({
 //refer tto the order id itself
     username: {type: Schema.Types.ObjectId, ref: "User"}, // refer to the userr name inside the UserModel
     message : String, //set the message equal to the user text area. 
     address: String,
    city: String,
    state: String,
    zipCode: Number,
    userGrocery: [{type: Schema.Types.ObjectId, ref: "Item"}],
    
     
});

module.exports = mongoose.model("Order", orderSchema);
