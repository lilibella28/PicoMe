var express = require('express');
var router = express.Router();

const newItemsCtrls = require('../controllers/newItem');

router.post('/orders/:id/newItem', newItemsCtrls.create);
router.delete('/orders/:id', newItemsCtrls.delete);
module.exports = router;
