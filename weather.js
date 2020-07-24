let weatherInfo = {};

const getWeatherData = (postcodeInfo) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${postcodeInfo.latitude}&lon=${postcodeInfo.longitude}&units=metric&appid=c3f0332f8bfedec6bf95c9eaaa1c6d36`)  // reques data from WEATHER API
    .then(response => response.json())  // access JSON object
    .then(json => {
        weatherInfo = {
             description: json.weather[0].description, // target property related to weather description
             iconCode: json.weather[0].icon,  // target property related to weather icon code
             temperature: json.main.temp    // target property related to temperature data
        }
        displayArea.style.display = "flex"; // make results area appear.
        displayResultsWeather.innerText = `It's ${weatherInfo.description} today and the temperature is ${weatherInfo.temperature} degrees celsius.`; //Insert updated weather text into the paragraph tag
        const imgSrc = weatherInfo.iconCode.slice(0, -1);
        displayResultsImage.src = `./images/${imgSrc}.svg`; // change image depending on weather conditions.
        displayResultsImage.alt = weatherInfo.description; // alt attribute is set to describe weather
        displayArea.scrollIntoView(true); // forces page to scroll down
    })
    .catch(error => console.log(error));
}



