// Create web server
// Express is a web server framework
const express = require('express');
const app = express();
// Create a server
const http = require('http');
const server = http.createServer(app);
// Create a socket
const io = require('socket.io')(server);
// Create a port
const PORT = 4000;
// Import the comments array
const comments = require('./comments.json');