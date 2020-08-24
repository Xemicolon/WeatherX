var express = require('express');
var router = express.Router();
const {homePage, getWeather} = require('../controllers/index')

/* GET home page. */
router.get('/', homePage);
router.post('/weather', getWeather)

module.exports = router;
