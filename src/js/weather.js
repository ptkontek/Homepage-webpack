import "../scss/main.scss";
console.log("weather js!!");
let lat;
let long;
const apiKey = "ceef2be4eb21938fcf364686db7ea019";

window.onload = (event) => {
  console.log("page is fully loaded");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      console.log("lat", lat, long);

      getWeatherData();
    });
  }
};

function getWeatherData() {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
  console.log(url);

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      updateWeatherData(data);
    });
  });
}

function updateWeatherData(data) {
  const temp = data.main.temp;
  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const clouds = data.clouds.all;
  const city = data.name;
  const sunRise = new Date(data.sys.sunrise * 1000); //w sekundach
  const sunSet = new Date(data.sys.sunset * 1000); //ilosc sekund od 1.01.1970

  document.getElementById("temp").innerHTML = temp + " °C";
  document.getElementById("humidity").innerHTML = humidity + " %";
  document.getElementById("pressure").innerHTML = pressure + " hPa";
  document.getElementById("windSpeed").innerHTML = windSpeed + " m/s";
  document.getElementById("clouds").innerHTML = clouds + " %";
  document.getElementById("sunRise").innerHTML ="godz: " +
    sunRise.getHours() + ":" + sunRise.getMinutes(); //cała data
  document.getElementById("sunSet").innerHTML ="godz: " +
    sunSet.getHours() + ":" + sunSet.getMinutes();

  let imgUrl =
    "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);

  const locationLink = document.getElementById("locationLink");
  locationLink.innerHTML = city;
  locationLink.href = `https://openstreetmap.org/#map=12/${lat}/${long}`;
}
