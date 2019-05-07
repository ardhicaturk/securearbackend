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
            res.status(200).send({ message: 'Error: Email already exist' });
        } else {
            User.create({
                name: req.body.name,
                email: req.body.email,
                pin: req.body.pin,
                noKtp: req.body.noktp,
                noHP: req.body.nohp
            }, function (err, user2) {
                if (err) return res.status(500).send({ message: "There was a problem registering the user." })
                res.status(200).send({ message: 'Success: Register complete' });
            });
        }
    })

});

router.get('/check', verifyToken, (req, res, next) => {
    var token = req.headers['x-access-token'];
    res.status(200).send({ auth: true, token: token });
});

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ auth: false, message: 'Error: Error on the server' });
        if (!user) return res.status(404).send({ auth: false, message: 'Error: No user found' });
        var valid = req.body.pin == user.pin;
        if (!valid) return res.status(401).send({ auth: false, token: null, message: 'Username or Pin was wrong' });
        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    })
})

router.post('/logout', function (req, res) {
    res.status(200).send({ auth: false, token: null });
});
module.exports = router;