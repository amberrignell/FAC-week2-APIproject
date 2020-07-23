const getWeatherData = (postcodeInfo) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${postcodeInfo.latitude}&lon=${postcodeInfo.longitude}&appid=c3f0332f8bfedec6bf95c9eaaa1c6d36`)
    .then(response => console.log(response.json()))
    .catch(error => console.log(error));
}




