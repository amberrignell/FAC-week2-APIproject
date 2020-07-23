
let inputPostcode = document.querySelector('#postcode'); // targetting when a postcode in the UK
let postcodeInfo = { } // creating object for GET method of postcode information
const form = document.querySelector('form'); //targetting form

// event listener for the submit button
form.addEventListener("submit", event => {
    event.preventDefault();
    fetch(`https://api.postcodes.io/postcodes/${inputPostcode.value}`) // fetch for postcode information, adding information to then use to access covid and weather data
        //first is to catch any invalid UK postcodes, and if not to convert data into JSON
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        //second then is to extract data required and put into the postCodeInfo global variable
        .then(response => {
            postcodeInfo = {
                district:  response.result['admin_district'],
                county: response.result['admin_county'],
                country: response.result['country'],
                longitude: response.result['longitude'],
                latitude: response.result['latitude']
            }       
            return postcodeInfo;
        })
        //third then is to utilise the postCodeInfo extracted data to plug into the getCovdData and getWeatherData
        .then(postcodeInfo => {
            getCovidData(postcodeInfo);
            getWeatherData(postcodeInfo);
        })

        //catch to catch any invalid postcodes
        .catch(error => {
            if (error.message === "404") {
                window.alert(`⚠️ Couldn't find ${inputPostcode.value}`);
              } else {
                window.alert("⚠️ Something went wrong");
            }
        })
});