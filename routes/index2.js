// var express = require('express');
// var router = express.Router();
// var mongo = require('mongodb').MongoClient;
// var objectID = require('mongodb').ObjectID;
// var assert = require('assert');

// var url = "mongodb://127.0.0.1:27017/toDo";

// router.get('/', function(req, res, next) {
//     res.render('index');
// });

// router.get('/getData', function(req, res, next) {
//     resultArray = [];
//     mongo.connect(url, function(err, db) {
//         assert.equal(null, err);
//         var cursor = db.collection('userData').find();
//         cursor.forEach(function(doc, err) {
//             assert.equal(null, err);
//             resultArray.push(doc);
//             // console.log(doc);
//         }, function() {
//             db.close();
//             res.render('index', { items: resultArray });
//             //console.log(resultArray);
//         });
//     });
// });

// router.post('/insert', function(req, res, next) {
//     // console.log("making connection");
//     mongo.connect(url, function(err, db) {
//         var entry;
//         var test = req.body.listItem;
//         if (Array.isArray(test)) {
//             test = test.filter(function(item) {
//                 return item !== '';
//             });
//         }
//         console.log(test);
//         // The following check is made because, if we enter a single value, it wont take it in as an array, following which it wont display the list. On the other hand if we declare the item to be an array, the the input with multiple values doesn't show, because that is already an array.

//         if (Array.isArray(test)) {
//             console.log("Array");
//             entry = test;
//         } else {
//             console.log("not array");
//             if (req.body.listItem == '') {
//                 console.log('Nothing inserted');
//             } else {
//                 entry = [];
//                 entry.push(req.body.listItem);
//             }
//         }
//         var listItem = {
//             name: req.body.name,
//             item: entry
//         };
//         // console.log(entry);
//         assert.equal(null, err);
//         // console.log('connection made');
//         db.collection('userData').insertOne(listItem, function(err, result) {
//             assert.equal(null, err);
//             console.log("sucessfully inserted!");
//             // console.log(req.body);
//             db.close();
//         });
//     });
//     res.redirect('/');
// });


// router.post('/update', function(req, res, next) {

//     var entry;
//     var test = req.body.listItem;
//     if (Array.isArray(test)) {
//         test = test.filter(function(item) {
//             return item !== '';
//         });
//     }
//     // console.log(entry);
//     if (Array.isArray(test)) {
//         console.log("Array");
//         entry = test;
//     } else {
//         console.log("not array");
//         entry = [];
//         if (req.body.listItem == '') {
//             console.log('Empty List');
//         } else {
//             entry.push(req.body.listItem);
//         }
//     }
//     console.log(entry);
//     var listItem = {
//         name: req.body.name,
//         item: entry
//     };
//     // console.log(listItem.item);
//     var id = req.body.id;
//     mongo.connect(url, function(err, db) {
//         assert.equal(null, err);
//         /*
//             In the update function, there are three arguments.

//             => The first one is a json object, which takes one the properties of the element we want to update.
//             => We need to parse the id variable as an object as the _id property of the mongodb is an object.

//         */
//         db.collection('userData').updateOne({ "_id": objectID(id) }, { $set: listItem }, function(err, result) {
//             assert.equal(null, err);
//             // console.log(req.body);
//             // console.log("Successfully updated!");
//             db.close();
//         });
//     });
//     res.redirect('/');
// });


// router.post('/delete', function(req, res, next) {
//     var id = req.body.id;
//     mongo.connect(url, function(err, db) {
//         assert.equal(null, err);
//         // 
//         db.collection('userData').deleteOne({ "_id": objectID(id) }, function(err, result) {
//             assert.equal(null, err);
//             console.log("Deleted successfully!");
//             db.close();
//         });
//     });
//     res.redirect('/getData');
// });


// module.exports = router;