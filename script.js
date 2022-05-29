let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let mins = now.getMinutes();
if (mins < 10) {
  mins = `0${mins}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let h4 = document.querySelector("h4");
h4.innerHTML = `Today is ${day}, ${hours}:${mins}`;

let bigCityName = document.querySelector("#bigCity");
let cityName = document.querySelector("#search-form");
cityName.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#lokakion");
  let city = searchInput.value;
  bigCityName.innerHTML = searchInput.value;
  let apiKey = "7f728bc610039fd916bbba44ccf47335";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

//

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let numero = document.querySelector("#numero");
  numero.innerHTML = `${temperature}°C`;
  let minimal = Math.round(response.data.main.temp_min);
  let mintemp = document.querySelector("#mintemp");
  mintemp.innerHTML = `${minimal}°C`;
  let humidity = response.data.main.humidity;
  let span1 = document.querySelector("#hummm");
  span1.innerHTML = `${humidity}`;
  let wind = response.data.wind.speed;
  let wind1 = Math.round((wind * 1000) / 60);
  let span2 = document.querySelector("#winnn");
  span2.innerHTML = `${wind1}`;
  console.log(response.data);
}

//

function showPos(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7f728bc610039fd916bbba44ccf47335";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  function showTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    let numero = document.querySelector("#numero");
    numero.innerHTML = `${temperature}°C`;
  }
  axios.get(apiUrl).then(showTemp);
}

navigator.geolocation.getCurrentPosition(showPos);
