
let inputPostcode = document.querySelector('#postcode'); // targetting when a postcode in the UK
let postcodeInfo = { } // creating object for GET method of postcode information
const form = document.querySelector('form');
form.addEventListener("submit", event => {
    event.preventDefault();
    fetch(`https://api.postcodes.io/postcodes/${inputPostcode.value}`) // fetch for postcode information to then access covid and weather data
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(response => {
            postcodeInfo = {
                district:  response.result['admin_district'],
                county: response.result['admin_county'],
                country: response.result['country'],
                longitude: response.result['longitude'],
                latitude: response.result['latitude']
            }
            console.log(postcodeInfo);       
            return postcodeInfo;
        })
        .catch(error => {
            if (error.message === "404") {
                window.alert(`⚠️ Couldn't find ${inputPostcode.value}`);
              } else {
                window.alert("⚠️ Something went wrong");
            }
        })
});