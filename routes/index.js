var express = require('express');
var router = express.Router();

router.get('/', function(res, req, next) {
    res.render('index');
});

module.exports = router;