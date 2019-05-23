let User = require('./../auth/user');

module.exports = {
    readProfile: function(data){
        User.findOne({email: data}, (err, user) => {
            if (err) return false;
            return user;
        })
    },
    editProfile: function(data){
        User.findOne({_id: data._id}, (err, user) => {
            if (err) return false;
            user = data;
            await user.save().then(() => {
                return true;
            });
        })
    }
}