var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    name: String,
    password: String,
    bio: String
});

module.exports = UserSchema;
