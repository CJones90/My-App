let update = document.querySelector("#city-change");
update.addEventListener("submit", search);
let apiKey = "c5f0e59acac64258bb92ed027d20c68f";

let city = update;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
console.log(`${apiUrl}&appid=${apiKey}`);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let temperatureDisplay = document.querySelector("#clue");
  temperatureDisplay.innerHTML = `It is ${temperature}℃ in ${city}`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

let now = new Date();

let FullDays = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = FullDays[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let time = document.querySelector("p.date");
time.innerHTML = `${day} ${hour}:${minute}`;

function search(event) {
  event.preventDefault();
  let cityChange = document.querySelector("#city");
  let display = document.querySelector("#city-search");
  cityChange.innerHTML = `${display.value}`;
}
