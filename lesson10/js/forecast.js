const forecastapi = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";

fetch(forecastapi)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

let forecastapi = jsObject.list.filter(data => data.dt_txt.includes('18:00:00'));
console.log(forecastapi);

let n = "";

let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";


forecastapi.forEach(data => {
  let d = new Date(data.dt_txt); 
  let weather = data.weather[0].description;
  let imageURL = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
         
document.getElementById(`weather${n+1}`).textContent = weekday[d.getDay()];
document.getElementById(`forecast${n+1}`).textContent = data.main.temp.toFixed(0) + `°F`;
document.getElementById(`icon${n+1}`).setAttribute('src', imageURL);
document.getElementById(`icon${n+1}`).setAttribute('alt', weather);
n++;
}) 
});
