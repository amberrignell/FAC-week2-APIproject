
let inputPostcode = document.querySelector('#postcode');
let district;
const form = document.querySelector('form');
form.addEventListener("submit", event => {
    event.preventDefault();
    fetch(`https://api.postcodes.io/postcodes/${inputPostcode.value}`)
        .then(response => {
            if (!response.ok) throw new Error(response.status);
            return response.json();
        })
        .then(response => {
            district = response.result['admin_district'];
            return district;
        })
        .catch(error => {
            if (error.message === "404") {
                window.alert(`⚠️ Couldn't find ${inputPostcode.value}`);
              } else {
                window.alert("⚠️ Something went wrong");
            }
        })
});