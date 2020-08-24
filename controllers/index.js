const axios = require("axios");
const { getDate, getTime } = require('../utils/getDateAndTime')

exports.homePage = async (req, res) => {
  res.render('index')
};

exports.getWeather = async (req, res) => {

  const { city } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;
  await axios.post(url).then((response) => {
    res.render("weather", {
      data: response.data,
      date: getDate,
      time: getTime
    });
  });
};
