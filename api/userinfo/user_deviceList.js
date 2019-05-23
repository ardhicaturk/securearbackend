const User = require('./../auth/user');
const Device = require("./../device/deviceModel")
module.exports = {
    readMyDevices = function(email){
        User.findOne({email: email}, (err, data) => {
            if (err) return false;
            return data.devices;
        })
    },
    addMyDevice = function(data){
        User.findOne({email: data.email}, (err,user) => {
            var _check = user.devices.findIndex(x => x.HWID == data.HWID);
            if(_check > -1){
                var addDevice = {HWID: data.HWID, name:data.deviceName};
                user.devices.push(addDevice);
                user.save().then(()=>{
                    return true;
                });
            } else {
                return false;
            }
        })
    },
    editMyDevice = function(data){
        
    },
    deleteMyDevice = function(data){
        
    }
}