// OK

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userId: { 
        type: String, 
        required: false}

});

module.exports = mongoose.model('User', userSchema);