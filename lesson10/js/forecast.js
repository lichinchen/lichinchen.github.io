const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";

    fetch(forecast)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);
        let day = 0;
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
         
        forecast.forEach(x => {
           const d = new Date(x.dt_txt);
           const desc = x.weather[0].description;
           const image = "https://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
          document.getElementById(`dayofweek${day+1}`).textContent = week[d.getDay()];
          document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0) + `°F`;
          document.getElementById(`icon${day+ 1}`).setAttribute('src', image);
          document.getElementById(`icon${day+ 1}`).setAttribute('alt', desc);
          day++;
           }) 
    });





    