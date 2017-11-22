var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient();
var assert = require('assert');

var url = "mongodb://127.0.0.1:27017/toDo";

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/getData', function(req, res, next) {
    resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('userData').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
            // console.log(doc);
        }, function() {
            db.close();
            res.render('data', { items: resultArray });
            //console.log(resultArray);
        });
    });
});

router.post('/insert', function(req, res, next) {
    // console.log("making connection");
    mongo.connect(url, function(err, db) {
        var entry;

        // The following check is made because, if we enter a single value, it wont take it in as an array, following which it wont display the list. On the other hand if we declare the item to be an array, the the input with multiple values doesn't show, because that is already an array.

        if (Array.isArray(req.body.listItem)) {
            // console.log("Array");
            entry = req.body.listItem;
        } else {
            console.log("not array");
            entry = [];
            entry.push(req.body.listItem);
        }
        var listItem = {
            name: req.body.name,
            item: entry
        };
        // console.log(entry);
        assert.equal(null, err);
        // console.log('connection made');
        db.collection('userData').insertOne(listItem, function(err, result) {
            assert.equal(null, err);
            console.log("sucessfully inserted!");
            console.log(req.body);
            db.close();
        });
    });
    res.redirect('/');
});


module.exports = router;