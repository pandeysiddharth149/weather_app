const apiKey = "228ad84746ac8bc746848a819f4841de";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const cityName = document.getElementById("text");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.getElementById("weather-img");

searchBtn.addEventListener("click", () => {
  checkWeather();
});

async function checkWeather() {
  const response = await fetch(
    apiURL + `&appid=${apiKey}` + `&q=${cityName.value}`
  );
  var data = await response.json();
    // console.log(data);
  if (response.status ==404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "flex";
  } else {
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + `°C`;
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + ` Km/h`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if (data.weather[0].main == "Clear") {
      weatherImg.src = "clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherImg.src = "clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "drrizle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherImg.src = "snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "rain.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "flex";
  }
}
