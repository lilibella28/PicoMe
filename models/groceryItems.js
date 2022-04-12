const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create models for the orders

const grocerySchema = new Schema({
     itemName: String, 
     itemNumber: Number,
})



module.exports = mongoose.model("Item", grocerySchema)