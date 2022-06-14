var express = require('express');
var router = express.Router();
const acceptCtrls = require('../controllers/accept');

router.get('/orders/:id/accept', acceptCtrls.accept)
router.post('orders/:id/accept', acceptCtrls.create)

module.exports = router;