var express = require('express');
var router = express.Router();
var verifyToken = require('./../auth/verifyToken');
var handler = require('./profil')
var handler2 = require('./user_deviceList')
router.post('/readProfile', verifyToken, (req,res) => {
    var cb = handler.readProfile(req);
    res.status(200).send(cb);
})

router.post('/editProfile', verifyToken, (req, res) => {
    var cb = handler.editProfile(req);
    if (cb) res.status(200).send({_status:true});
    if (!cb) res.status(200).send({_status:false});
})

router.post('/readMyDevices', verifyToken, (req,res) => {
    var cb = handler2.readMyDevices(req);
    if(!cb) res.status(500).send({_status: false, message:"Error while reading devices"});
    if (cb) res.status(200).send(cb);
})

router.post('/addMyDevice', verifyToken, (req, res) => {
    var cb = handler2.addMyDevice(req);
    if(!cb) res.status(500).send({_status: false, message:"devices has been exist"});
    if (cb) res.status(200).send({_status:true});
})

router.post('/editMyDevice', verifyToken, (req, res) => {
    var cb = handler2.editMyDevice(req);
    if(!cb) res.status(500).send({_status: false, message:"Error while editing device info"});
    if (cb) res.status(200).send({_status:true});
})

router.post('/deleteMyDevice', verifyToken, (req, res) => {
    var cb = handler2.deleteMyDevice(req);
    if(!cb) res.status(500).send({_status: false, message:"Error while deleting device"});
    if (cb) res.status(200).send({_status:true});
})

module.exports = router;