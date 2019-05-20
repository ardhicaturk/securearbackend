const deviceModel = require('./deviceModel');
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
    },
    lockDevice: function(HWID, state, io){
        deviceModel.findOne({HWID: HWID}, (err, user) => {
            if(err) console.log("[lockdevice] Device unknown");
            if(state) user.lastLock = new Date();
            if(!state) user.lastOpen = new Date();
            user.lockState = state;
            user.save();
            io.to(user.socketid).emit("{lock:"+String(state)+"}");
        })
    },
    editDevice: function(HWID, data){

    },
    findDevice: function(HWID){

    }

}