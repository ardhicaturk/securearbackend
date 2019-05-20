const User = require('./../auth/user');
const Device = require("./../device/deviceModel")
module.exports = {
    readMyDevices = function(email){
        User.findOne({email: email}, (err, data) => {
            if (err) return res.status(500).send({_status:false, message: "Error: Read data device" })
            res.status(200).send(data.devices);
        })
    },
    addMyDevice = function(data){
        User.findOne({email: data.email}, (err,user) => {
            var _check = user.devices.findIndex(x => x.HWID == data.HWID);
            if(_check > -1){
                var addDevice = {HWID: data.HWID, name:data.deviceName};
                user.devices.push(addDevice);
                user.save().then(()=>{
                    res.status(200).send({_status: true, message: "Add device success"});
                });
            } else {
                res.status(200).send({_status:false, message: 'Error: Adding device, because device has been exist' });
            }
        })
    },
    editMyDevice = function(data){
        
    },
    deleteMyDevice = function(data){
        
    }
}