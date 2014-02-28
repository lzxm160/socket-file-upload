var http = require("http");
var express = require("express");

// Create express server.
var app = express();
var server = http.createServer(app);

// Create socket server.
var socketio = require("socket.io");
io = socketio.listen(server);

server.listen(3000);

// Set "views" directory.
app.set("views", __dirname + "/views");

// Check "static" folder for requested resource (before checking routes).
app.use(express.static(__dirname + "/public"));