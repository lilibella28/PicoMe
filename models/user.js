const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema ({
    name: String, 
    email: String, 
    googleId: {
        type: String, 
        require: true,
    },
    avatar: String

},
{
    timestamps: true,
}

)

module.exports = mongoose.model('User', userSchema)