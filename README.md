# Rainy With A Chance Of Plague ☔

This is an app in which a user can enter their postcode and see the current weather conditions and number of confirmed COVID-19 cases in their area. 
We built it in a 1.5 days as the weekly project for [Founder and Coders](https://www.foundersandcoders.com/) week 2 which focused on HTTP (API, fetch, promises).

## User journey 🧚‍♀️

1. Users will type in their UK postcode and either hit enter or click the "Wish me luck" button. 
2. The page will smoothly scroll down to display the following information relating to the inputted postcode:

    - Image of the current weather condition
    - Weather description (e.g. "light rain", "overcast clouds")
    - Temperature in degree celsius
    - Number of Covid-19 cases

3. If the user inputs an invalid or inexistent postcode a pop-up message will be displayed "Couldn't find [inputted postcode]"
4. If the user wishes to search another postcode they can click on the up button and the page with scroll back up to the search bar.

## User Stories

**Core stories**
As a user, I want to:

* See an interesting mashup of different data ☑️
* Input information to change the displayed result ☑️
* View the app on all of my devices ☑️
* See/hear the content clearly ☑️
* Have a spacious and easy to navigate layout ☑️
* Have a clear space to enter my postcode ☑️
* Check another postcode without refreshing the page ☑️
* Navigate the site using keyboard control ☑️

As journalist/scientist, I need to know the source of the data.

**Stretch stories**

* As a user, I want to be shown the location of my postcode. 
* As an impatient user, I want to see some indication that data is loading 
* As a confused user, I want to be told when something goes wrong ☑️

## Acceptance Criteria
Query at least two APIs using fetch
Dynamic content generated with JS
A clearly defined user journey, documented in your readme
A responsive, mobile-first design
Ensure your app is accessible to as many different users as possible
Try not to push API keys up to GitHub (since anyone can see them there)

## APIs used 📚

3 APIs were used in the making of this app:

**Postcode API:**
Used to convert a user's postcode into data that is usable by subsequent APIs.
Data required included region/county of the postcode that matched with COVID-19 reporting areas, as well as longitude and latitude for the weather API.
https://postcodes.io/

**Weather API:**
Takes longitude and latitude as arguments. Used to return basic weather conditions (i.e. 'clouds', 'clear sky') and temperature. Temperatures converted to Celsius.
https://openweathermap.org/api

**Covid-19 API**
Contains region specific data on number of confirmed COVID-19 cases. 
https://documenter.getpostman.com/view/9215231/SzYZ2Jss?version=latest

## The Team 🧠

1. [Amber](https://github.com/amberrignell) (Design)
2. [Josh](https://github.com/jhart5) (Scrum Master)
3. [Lisa](https://github.com/LiCern) (Deploymen/Quality)
4. [My Hoa](https://github.com/mhtien) (Deployment/Quality)


## Build :hammer:

> *What did we use? to :wrench:*

- Figma
- Colorzilla 
- APIs 
- VSCode
- Git & GitHub
- Command Line
- HTML & CSS
- Vanilla JavaScript
- Jitsi
- Zoom
- ...Google, Google, Google


