
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
    });
    
   
