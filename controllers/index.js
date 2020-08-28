const axios = require("axios");
const { getDate, getTime } = require("../utils/getDateAndTime");

exports.homepage = async (req, res) => {
  res.render("index", {
    date: getDate,
    time: getTime,
  });
};

exports.weather = async (req, res) => {
  res.render("weather", {
    data: null,
    date: getDate,
    time: getTime,
  });
};

exports.getWeather = async (req, res) => {
  const { city } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;
  try {
    await axios.post(url).then((response) => {
      res.render("weather", {
        data: response.data,
        date: getDate,
        time: getTime,
      });
    });
  } catch (error) {
    res.render("error", {
      error: error.response.data.message,
    });
  }
};
