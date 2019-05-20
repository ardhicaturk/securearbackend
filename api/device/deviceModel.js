var mongoose = require('mongoose');
var DeviceSchema = new mongoose.Schema({
    HWID: String,
    socketid: String,
    pinLock: Number,
    lockState: Boolean,
    lastLock: Date,
    lastOpen: Date,
    rfid: [String],
    fingercode: [String]
});

mongoose.model("Device", DeviceSchema);
module.exports = mongoose.model("Device");