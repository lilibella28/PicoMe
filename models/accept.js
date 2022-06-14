const mongoose = require("mongoose");
const Schema = mongoose.Schema;


acceptSchema = new Schema({
    order: {type: Schema.Types.ObjectId, ref: "Order"},
    message: String,
    contact: String

})

module.exports = moongose.models('Accept', acceptSchema)