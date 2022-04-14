var express = require("express");
var router = express.Router();
const groceryItemsCtrls = require("../controllers/groceryItems");

router.get("/groceries/new", groceryItemsCtrls.new)
router.post("/groceries", groceryItemsCtrls.create)
router.post("/orders/:id/groceries", groceryItemsCtrls.addGrocery)

module.exports = router;