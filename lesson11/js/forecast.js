/*
const forecast= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial';
  
fetch(forecast)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const days = jsonObject['list'];
        console.log(days);
        var newDays = [];
        var today = parseInt(new Date(days[0].dt_txt).getDate());
        var x = 0;
           
            
        for (let i = 0; i < days.length; i++) {
            if (days[i].dt_txt == `2020-11-${today} 18:00:00`) {
                newDays[x] = days[i];
                x++;
                today++;
            }
        }
        let forecastTemp = document.getElementsByClassName('forTemp');
        for (let i = 0; i < forecastTemp.length; i++) {
            forecastTemp[i].innerHTML = newDays[i].main.temp;
        }
        let weatherIcon = document.getElementsByClassName("forimg");
        for (let i = 0; i < weatherIcon.length; i++) {
            weatherIcon[i].setAttribute("src", `https://openweathermap.org/img/wn/${newDays[i].weather[0].icon}@2x.png`);
            weatherIcon[i].setAttribute("alt", `Icon representing ${newDays[i].weather[0].description}`);
        }
        let weatherDay = document.getElementsByClassName('day');
        for (let i = 0; i < weatherDay.length; i++) {
            let longDate = new Date(newDays[i].dt_txt);
            weatherDay[i].textContent = longDate.toLocaleString("en-us",{weekday:"long"});
        }
    });*/




// Actual variables
const APIurl = 'https://api.openweathermap.org/data/2.5/';
const weatherAPIurl = APIurl + 'weather';
const forecastAPIurl = APIurl + 'forecast';
const apiID = '&appid=5539d42cf2d71dde5c4f1a28929669c0';
const apiUnits = '&units=imperial';
const prestonURL = '?id=5604473' + apiID + apiUnits;
const sodaspringsURL = '?id=5607916' + apiID + apiUnits;
const fishhavenURL = '?lat=42.0380399&lon=-111.4048681' + apiID + apiUnits;

// concatenating the links
const prestonWeather = weatherAPIurl + prestonURL;
const sodaspringsWeather = weatherAPIurl + sodaspringsURL;
const fishhavenWeather = weatherAPIurl + fishhavenURL;
const prestonForecast = forecastAPIurl + prestonURL;
const sodaspringsForecast = forecastAPIurl + sodaspringsURL;
const fishhavenForecast = forecastAPIurl + fishhavenURL;

// Page selector
let weatherURL = "";
let forecastURL = "";
if (document.getElementById("preston")) {
    weatherURL = prestonWeather;
    forecastURL = prestonForecast;
} else if (document.getElementById("sodasprings")) {
    weatherURL = sodaspringsWeather;
    forecastURL = sodaspringsForecast;
} else if (document.getElementById("fishhaven")) {
    weatherURL = fishhavenWeather;
    forecastURL = fishhavenForecast;
}


    //5-day forecast
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast)
        for (let day = 0; day < forecast.length; day++) {

            //days of the week
            let weatherDay = document.getElementsByClassName('days');
            for (let i = 0; i < weatherDay.length; i++) {
                let longDate = new Date(forecast[day].dt_txt);
                weatherDay[day].textContent = longDate.toLocaleString("en-us", {
                    weekday: "long"
                });
            }
            //temperature
            let forecastTemp = document.getElementsByClassName('forTemp');
            for (let i = 0; i < forecastTemp.length; i++) {
                forecastTemp[day].innerHTML = forecast[day].main.temp;
            }
            //icon
            let weatherIcon = document.getElementsByClassName("forimg");
            for (let i = 0; i < weatherIcon.length; i++) {
                weatherIcon[day].setAttribute("src", `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}@2x.png`);
                weatherIcon[day].setAttribute("alt", `Icon representing ${forecast[day].weather[0].description}`);
            }
        }

    });




// Variables
const APIurl = 'https://api.openweathermap.org/data/2.5/';
const weatherAPIurl = APIurl + 'weather';
const forecastAPIurl = APIurl + 'forecast';
const apiID = '&appid=49a941896ac322f17786b22ffb8b1fec';
const apiUnits = '&units=imperial';
const prestonURL = '?id=5604473' + apiID + apiUnits;
const sodaspringsURL = '?id=5607916' + apiID + apiUnits;
const fishhavenURL = '?lat=42.0380399&lon=-111.4048681' + apiID + apiUnits;

// Links Concatenation
const prestonWeather = weatherAPIurl + prestonURL;
const sodaspringsWeather = weatherAPIurl + sodaspringsURL;
const fishhavenWeather = weatherAPIurl + fishhavenURL;
const prestonForecast = forecastAPIurl + prestonURL;
const sodaspringsForecast = forecastAPIurl + sodaspringsURL;
const fishhavenForecast = forecastAPIurl + fishhavenURL;

// Page selector
let weatherURL = "";
let forecastURL = "";
if (document.getElementById("preston")) {
    weatherURL = prestonWeather;
    forecastURL = prestonForecast;
} else if (document.getElementById("sodasprings")) {
    weatherURL = sodaspringsWeather;
    forecastURL = sodaspringsForecast;
} else if (document.getElementById("fishhaven")) {
    weatherURL = fishhavenWeather;
    forecastURL = fishhavenForecast;
}

// Weather Functions
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let t = parseFloat(jsObject.main.temp);
        let s = parseFloat(jsObject.wind.speed);
        let output = "N/A";
        const desc = jsObject.weather[0].description; // reference the weather array
        //Comment Space Needed to Fix an Error Message
        document.getElementById('currently').innerHTML = jsObject.weather[0].description;
        document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
        if (t <= 50 && s >= 3) {
            let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
            output = Math.round(f);
        };

        document.getElementById('highTemp').innerHTML = jsObject.main.temp_max + "&#8457;";
        document.getElementById("windChill").innerHTML = output + "&#8457;";
        document.getElementById('humidity').innerHTML = jsObject.main.humidity;
        document.getElementById('windSpeedMPH').innerHTML = Math.round(s) + " MPH";
    });
    //Forecast Function
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast)
        for (let day = 0; day < forecast.length; day++) {

            //Days
            let weatherDay = document.getElementsByClassName('days');
            for (let i = 0; i < weatherDay.length; i++) {
                let longDate = new Date(forecast[day].dt_txt);
                weatherDay[day].textContent = longDate.toLocaleString("en-us", {
                    weekday: "long"
                });
            }
            //Temperature
            let forecastTemp = document.getElementsByClassName('forecastTemp');
            for (let i = 0; i < forecastTemp.length; i++) {
                forecastTemp[day].innerHTML = forecast[day].main.temp;
            }
            //Icon
            let weatherIcon = document.getElementsByClassName("forcastimg");
            for (let i = 0; i < weatherIcon.length; i++) {
                weatherIcon[day].setAttribute("src", `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}@2x.png`);
                weatherIcon[day].setAttribute("alt", `Icon representing ${forecast[day].weather[0].description}`);
            }
        }

    });
    
   



