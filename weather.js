let weatherInfo = {};

const getWeatherData = (postcodeInfo) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${postcodeInfo.latitude}&lon=${postcodeInfo.longitude}&units=metric&appid=c3f0332f8bfedec6bf95c9eaaa1c6d36`)  // reques data from WEATHER API
    .then(response => response.json())  // access JSON object
    .then(json => {
        weatherInfo = {
             description: json.weather[0].icon,  // target property related to weather description
             temperature: json.main.temp    // target property related to temperature data
        }
        displayResultsWeather.innerText = `It's ${weatherInfo.description} today and the temperature is ${weatherInfo.temperature}`; //Insert updated weather text into the paragraph tag
        const imgSrc = weatherInfo.description.replace(" ", "-");
        displayResultsImage.src = `./images/${imgSrc}.svg`;
    })
    .catch(error => console.log(error));
}



