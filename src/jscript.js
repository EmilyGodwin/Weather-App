let now = new Date();
let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturday",
];
let days = weekDay[now.getDay()];
function getDay() {
  let currentDay = document.querySelector("#currentDay");
  currentDay.innerHTML = `${days}`;
}
getDay();
let clock = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
];
let time = clock[now.getHours()];
let minutes = now.getMinutes();
let currentTime = document.querySelector("#currentTime");
function military() {
  let mTime = now.getHours();
  currentTime.innerHTML = `${mTime}:${minutes}`;
}
military();
function getTime() {
  currentTime.innerHTML = `${time}:${minutes}`;
}
let element = document.querySelector("#currentTime");
element.addEventListener("click", getTime);

//week5

function displayWeather(response) {
  document.querySelector("#currentCity").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}

function searchCity(city) {
  let apiKey = "12e817575070bcd60eb64f87187b9c19";

  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", search);
