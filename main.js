const cityname = document.querySelector("p.city");
const input = document.querySelector('input');
const errorMsg = document.querySelector('p.error_message');
const temp = document.querySelector('p.temp');
const date = document.querySelector('p.date');
const weatherDescription = document.querySelector('p.description');
const feelsLike = document.querySelector('p.feels_like');
const windSpeed = document.querySelector('p.wind_speed');
const pressure = document.querySelector('p.pressure');
const humadity = document.querySelector('p.humadity');
const clouds = document.querySelector('p.clouds');
const visibility = document.querySelector('p.visibility');
const rain = document.querySelector('p.rain');

const apiInfo = {
    link: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "&appid=84f12bc83504f003db9877160070014a",
    units: "&units=metric",
    lang: "&land=pl",
}


function getWeather(){
    const apiCity = input.value;
    const apiUrl = `${apiInfo.link}${apiCity}${apiInfo.key}${apiInfo.units}${apiInfo.lang}`;


    axios.get(apiUrl).then((response) => {

        const data = response.data;

     

        cityname.textContent = `${data.name}, ${data.sys.country}`;
        temp.textContent = `${Math.round(data.main.temp)}°C`;

        weatherDescription.textContent = data.weather[0].description;
        feelsLike.textContent = `${Math.round(response.data.main.feels_like)}°C`;
        windSpeed.textContent = `${response.data.wind.speed} m/s`;
        pressure.textContent = `${response.data.main.pressure} hPa`;
        humadity.textContent = `${response.data.main.humidity}%`;
        clouds.textContent = `${response.data.clouds.all}%`;
        visibility.textContent = `${response.data.visibility} m`;

        rain.textContent = data.rain ? `${response.data.rain["1h"]} mm` : "0 mm";

    });
}

function getWeatherByEnter(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
}

input.addEventListener('keypress', getWeatherByEnter);