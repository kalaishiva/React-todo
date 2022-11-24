//Schema created 
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is require'],
        trim: true,
    },

    email: {
        type: String,
        unique: true,
    }
});

module.exports = mongoose.model("User", userSchema)