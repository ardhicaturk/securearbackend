const app = require('express')();
const server = require('http').Server(app);
// const server = require('https');
const io = require('socket.io')(server);
const fs = require('fs');
const bodyParser = require('body-parser');
var api_auth = require('./api/auth/auth');
var api_userDeviceInfo = require('./api/device/deviceHandler');
var api_deviceControl = require('./api/device/deviceHandler')
var deviceControl = require('./api/device/deviceControl');
var key = fs.readFileSync('keys/securearbackend.key');
var cert = fs.readFileSync('keys/securearbackend.cert');
var httpsOptions={
    key: key,
    cert: cert
}
// server.createServer(httpsOptions, app).listen(3000, () => {
//     console.log('[https]Listening...');
// })
server.listen(3000, () => {
    console.log('[https]Listening...')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/auth', api_auth);
app.use('/api/userinfo', api_userDeviceInfo);
app.use('/api/device', api_deviceControl)
app.get('/', (req, res) => {
    res.status(200);
})

io.on("connection", function(socket){
    deviceControl.callback(socket);
})
