const long = document.querySelector(".lon");
const lati = document.querySelector(".lat");
const weatherContainer = document.querySelector(".weather-container");
const loading = document.querySelector(".loading");
const weatherName = document.querySelector(".name");
const icon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp");
const description = document.querySelector(".weather-description");
const longitude = document.querySelector(".longitude");
const latitude = document.querySelector(".latitude");

mapboxgl.accessToken =
  "pk.eyJ1IjoieGVtaWNvbG9ubiIsImEiOiJja2VjcnB5N2gwbGlrMzBwNzZzM21ibjNnIn0.Z_1WKyQRBr9H_yds0g3ezw";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11",
  center: [9.082, 8.6753], // starting position
  zoom: 6, // starting zoom
});

map.on("click", function (e) {
  weatherContainer.classList.add("hidden");
  loading.classList.remove("hidden");
  loading.innerHTML = "Loading...";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&units=metric&appid=7e700558361c5115242bde6e5465c77c`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      loading.classList.add("hidden");
      weatherContainer.classList.remove("hidden");
      temp.innerHTML = `${data.main.temp} <sup style="font-size: 30px;">°C</sup>`;
      weatherName.innerHTML = `${data.name} <span><sup class="country">${data.sys.country}</sup></span>`;
      icon.innerHTML = `<img style="margin: auto" width="80" height="80" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />`;
      description.innerHTML =
        data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1);
      longitude.innerHTML = "Longitude: " + data.coord.lon;
      latitude.innerHTML = "Latitude: " + data.coord.lat;
    });
});
