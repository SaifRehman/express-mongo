var express = require('express');
var app = express();
var mongoClient = require('mongodb').MongoClient();
var assert = require('assert');
var path = require('path');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var index = require('./routes/index');

app.engine('hbs', hbs({ extname: "hbs", layoutsDir: __dirname + "/views/", defaultLayout: "layout" }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + "/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public")));

app.use('/', index);

app.use(function(req, res, next) {
    var err = new Error("Error found:"); // instantiating error object
    err.status = 404; // making the status as 404 when it is error
    next(err); // call the next() function and pass err in the argument so that it can be used by the next function.
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message; // when we write locals, we are telling it to render it only when we are viewing the application.
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status = (err.status || 500);
    res.render('error', {
        msg: err.message,
        error: {}
    });
});

// app.get("/", function(req, res) {
//     res.send("Hello WOrld!!");
// });

// app.listen(8000);
module.exports = app;