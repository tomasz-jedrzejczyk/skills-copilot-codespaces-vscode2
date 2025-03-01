//crate web server
//express is a web server framework
const express = require('express');
const app = express();
//create a server
const http = require('http');
const server = http.createServer(app);
//create a socket
const io = require('socket.io')(server);
//create a port
const PORT = 4000;
//import the comments array
const comments = require('./comments.json')