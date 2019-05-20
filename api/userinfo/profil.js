let User = require('./../auth/user');

module.exports = {
    readProfile: function(data){
        User.findOne({email: data}, (err, user) => {
            if (err) res.status(200).send({_status:false, message: 'Error: Read Profile' });
            return user;
        })
    },
    editProfile: function(data){
        User.findOne({_id: data._id}, (err, user) => {
            if (err) res.status(200).send({_status:false, message: 'Error: Edit Profile' });
            user = data;
            await user.save().then(() => {
                res.status(200).send({_status:true, message: 'Success: Edit Profile' });
            });
        })
    }
}