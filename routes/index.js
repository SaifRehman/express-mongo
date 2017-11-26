var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('127.0.0.1:27017/toDo');

var Schema = mongoose.Schema;

var toDoList = new Schema({
    name: String,
    item: { type: [String], default: [] } // use object notation to add options
}, { collection: "userData" });

var userData = mongoose.model('userModel', toDoList);


router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/getData', function(req, res, next) {
    userData.find()
        .then(function(doc) {
            res.render('index', { items: doc });
        });
});

router.post('/insert', function(req, res, next) {
    var entry;
    var test = req.body.listItem;
    if (Array.isArray(test)) {
        test = test.filter(function(item) {
            return item !== '';
        });
    }
    console.log(test);
    if (Array.isArray(test)) {
        // console.log("Array");
        entry = test;
    } else {
        // console.log("not array");
        if (req.body.listItem == '') {
            console.log('Nothing inserted');
        } else {
            entry = [];
            entry.push(req.body.listItem);
        }
    }
    var listItem = {
        name: req.body.name,
        item: entry
    };

    var data = new userData(listItem);
    data.save();
    res.redirect('/');
});


router.post('/update', function(req, res, next) {

    var entry;
    var test = req.body.listItem;
    if (Array.isArray(test)) {
        test = test.filter(function(item) {
            return item !== '';
        });
    }
    // console.log(entry);
    if (Array.isArray(test)) {
        // console.log("Array");
        entry = test;
    } else {
        // console.log("not array");
        entry = [];
        if (req.body.listItem == '') {
            console.log('Empty List');
        } else {
            entry.push(req.body.listItem);
        }
    }
    // var listItem = {
    //     name: req.body.name,
    //     item: entry
    // };
    var id = req.body.id;

    userData.findById(id, function(err, doc) {
        if (err) {
            console.log("No entry found");
        }
        doc.name = req.body.name;
        doc.item = entry;
        doc.save();
    });
    res.redirect('/');
});


router.post('/delete', function(req, res, next) {
    var id = req.body.id;
    userData.findByIdAndRemove(id).exec();
    res.redirect('/getData');
});


module.exports = router;