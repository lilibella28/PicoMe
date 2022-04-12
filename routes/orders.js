const express = require("express");
const router = express.Router();
const orderCrtl = require("../controllers/orders");

router.get('/', orderCrtl.index);
router.get('/new', orderCrtl.new);
router.get('/:id', orderCrtl.show);
router.post("/", orderCrtl.create);


module.exports = router;