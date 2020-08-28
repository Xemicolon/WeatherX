var express = require("express");
var router = express.Router();
const { homepage, weather, getWeather, getweather } = require("../controllers/index");

/* GET home page. */
router.get("/", homepage)
router.get("/weather", weather);
router.post("/weather", getWeather);

module.exports = router;
