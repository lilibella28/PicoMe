const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Model for the contact form so the user can send their information
const contactSchema = new Schema({
    firstName: String,
    lastName: String,
    city: String,
    email: String,
    state: String,
    zipCode: Number,
    message: String


},{
    timestamps: true
}

)

module.exports = mongoose.model("Contact", contactSchema);