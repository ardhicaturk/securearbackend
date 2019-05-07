var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pin: String,
    noKtp: String,
    noHP: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');