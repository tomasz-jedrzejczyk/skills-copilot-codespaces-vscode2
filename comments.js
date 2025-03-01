//crate web server
//import express module
var express = require('express');
var app = express();

//import body-parser module
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//import mongoose module
var mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost:27017/Comment');

//create a schema
var commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

var Comment = mongoose.model('Comment', commentSchema);

//create a post request
app.post('/comment', (req, res) => {
    var myData = new Comment(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//create a get request
app.get('/comment', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            res.send("error");
        }
        res.send(comments);
    });
});

//create a delete request
app.delete('/comment', (req, res) => {
    Comment.remove({}, (err, comments) => {
        if (err) {
            res.send("error");
        }
        res.send("comments deleted");
    });
});

//create a put request
app.put('/comment', (req, res) => {
    Comment.update({ name: req.body.name }, { comment: req.body.comment }, (err, comments) => {
        if (err) {
            res.send("error");
        }
        res.send("comments updated");
    });
});

//create a delete request
app.delete('/comment', (req, res) => {
    Comment.remove({ name: req.body.name }, (err, comments) => {
        if (err) {
            res.send("error");
        }
        res.send("comment deleted");
    });
});

//create a server
app.listen(3000, () => {
    console.log("server is running on port 3000");
});