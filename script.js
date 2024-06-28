const apikey = "2408401ed3a23d8757c0e3682f321728";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search input");
const searchBox = document.querySelector(".search button");
const img = document.querySelector(".weather-icon");

async function getWeather(city) {
  const Response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (Response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await Response.json();
    // console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/Hr";
    if (data.weather[0].main == "Clouds") {
      img.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      img.src = "./images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      img.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      img.src = "./images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      img.src = "./images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBox.addEventListener("click", () => {
  getWeather(searchinput.value);
});
