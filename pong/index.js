var serialPort = require("serialport");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);


serialPort.list(function(error,ports){
  console.log(ports);
})

var port = new serialPort('/dev/tty.usbmodem14201', {
  baudRate: 9600
});

var Readline = serialPort.parsers.Readline;
var parser = new Readline();
port.pipe(parser);

parser.on('data', function(d){
  io.emit('potiValues',d)
})

server.listen(3000);

app.use('/', express.static(__dirname));
