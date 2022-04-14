const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create models for the orders
const newItems = new Schema({
    name: String,
    amount: Number
})


const orderSchema = new Schema({
 //refer tto the order id itself
     username: {type: Schema.Types.ObjectId, ref: "User"}, // refer to the userr name inside the UserModel
     message : String, //set the message equal to the user text area. 
     address: String,
     city: String,
     state: String,
     zipCode: Number,
     items: Array,
    //  userGrocery: [{type: Schema.Types.ObjectId, ref: "Item"}],
    
     
},
   {
       timestamps:true
   }
);

module.exports = mongoose.model("Order", orderSchema);
