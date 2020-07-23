let covidInfo = {};

const getCovidData = (postcodeInfo) => {
    
    fetch("https://api.covid19uk.live")                           // reques data from COVID API
        .then( response => response.json())                       // access JSON object
        .then( json => json.data[0].area)                         // target property related to location figures
        .then( areaString => JSON.parse(areaString))              // turn from string to array to manipulate below
        .then( areaArray =>  {  
            const target = areaArray.filter( currentValue => {    // filter out every value apart from the location the user inputted
                return (currentValue.location.includes(postcodeInfo.district) || // Postcode API is not 100% matched to COVID regions
                        currentValue.location.includes(postcodeInfo.county)  ||  // so we match decreasingly precise areas until we find a match
                        currentValue.location.includes(postcodeInfo.country));
            })
            displayResultsCovid.innerText = `There are ${covidInfo.number} cases of Covid in ${covidInfo.location}`; // This is the text displayed in the results for the Covid and Area part
        })
        .catch( error => console.error("error!"))
}

