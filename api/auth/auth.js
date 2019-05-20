var express = require('express');
var router = express.Router();
let User = require('./user');
var jwt = require('jsonwebtoken');
var config = require('./config')
var db = require('./db');
var verifyToken = require('./verifyToken');
router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            res.status(200).send({_status:false, message: 'Error: Email already exist' });
        } else {
            User.create({
                name: req.body.name,
                email: req.body.email,
                pin: req.body.pin,
                noKtp: req.body.noKtp,
                noHP: req.body.noHp,
                notif: false,
                photoPath: ""
            }, function (err, user2) {
                if (err) return res.status(500).send({_status:false, message: "There was a problem registering the user." })
                res.status(200).send({_status:true, message: 'Success: Register complete' });
            });
        }
    })

});

router.get('/check', verifyToken, (req, res, next) => {
    var token = req.headers['x-access-token'];
    res.status(200).send({_status:true, auth: true, token: token });
});

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({_status:false, auth: false, message: 'Error: Error on the server' });
        if (!user) return res.status(404).send({_status:false, auth: false, message: 'Error: No user found' });
        var valid = req.body.pin == user.pin;
        if (!valid) return res.status(401).send({_status:false, auth: false, token: null, message: 'Username or Pin was wrong' });
        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({_status:true, auth: true, token: token });
    })
})

router.post('/logout', function (req, res) {
    res.status(200).send({_status:false, auth: false, token: null });
});
module.exports = router;