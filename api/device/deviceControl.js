const deviceModel = require('./deviceModel');
function lockDevice(HWID, state){
    deviceModel.findOne({HWID: HWID}, (err, user) => {
        if(err) console.log("[lockdevice] Device unknown");
        if(state) user.lastLock = new Date();
        if(!state) user.lastOpen = new Date();
        user.lockState = state;
        user.save();
        socket.to(user.socketid).emit('control', "{lock:"+String(state)+"}");
    })
}
module.exports = {
    callback: function(socket){
        socket.on('connect', function(data){
            const _bufferSocketID = socket.id;
            deviceModel.findOneAndUpdate({HWID: data.HWID}, {socketid: _bufferSocketID}, (err) => {
                if(err) console.log("[callback Device] Device unknown");
            });
        })
        socket.on('sync', function(data){
            
        })
        socket.on('lock', function(data){
            lockDevice(data.HWID, data.state)
        })
    },
    editDevice: function(HWID, data){

    },
    findDevice: function(HWID){

    }

}