let weatherInfo = {};

const getWeatherData = (postcodeInfo) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${postcodeInfo.latitude}&lon=${postcodeInfo.longitude}&units=metric&appid=c3f0332f8bfedec6bf95c9eaaa1c6d36`)  
    .then(response => response.json())
    .then(json => {
        weatherInfo = {
             description: json.weather[0].description,
             temperature: json.main.temp
        }
    })
    .catch(error => console.log(error));
}



