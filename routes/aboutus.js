var express = require('express');
var router = express.Router();

const aboutCtrls = require('../controllers/about');

router.get('/about', aboutCtrls.about)


module.exports = router;
