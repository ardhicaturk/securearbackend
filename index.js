const app = require('express')();
const server = require('http').Server(app);
const fs = require('fs');
const bodyParser = require('body-parser');
var api_auth = require('./api/auth/auth')
server.listen(3000, () => {
    console.log('[https]Listening...')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/auth', api_auth);
app.get('/', (req, res) => {
    res.send('Hello HTTPS!');
})