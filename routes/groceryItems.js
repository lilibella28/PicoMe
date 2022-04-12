var express = require("express");
var router = express.Router();
const rootUrl = "https://api.nal.usda.gov/fdc/v1/foods/"
const token = process.env.FOOD_TOKEN
const groceryItemsCtrls = require("../controllers/groceryItems");
    
router.get("/groceries/new", groceryItemsCtrls.new)
router.post("/groceries", groceryItemsCtrls.create)
router.post("/orders/:id/groceries", groceryItemsCtrls.addGrocery)

module.exports = router;