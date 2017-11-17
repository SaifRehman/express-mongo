var express = require('express');
var mongoClient = require('mongodb').MongoClient();
var assert = require('assert');
var path = require('path');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');