var mongoose = require('mongoose');
var infoDeviceSchema = new mongoose.Schema({HWID: String, name: String});
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pin: String,
    noKtp: String,
    noHP: String,
    notif: Boolean,
    photoPath: String,
    devices: [infoDeviceSchema]
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');