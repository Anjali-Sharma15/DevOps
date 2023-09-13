var express = require('express')
const process = require('process');

var expressapp = express()
expressapp.get('/', function (req, res) {
    res.send('{"message":"Hello World JavaScript v1"}')
})
expressapp.listen(8000, function () {
    console.log('Ready on port 8000!')
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});