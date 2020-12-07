
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";



fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('curCon').textContent = jsObject.weather[0].main;
        document.getElementById('curTemp').textContent = jsObject.main.temp;
        document.getElementById('hiTemp').textContent = jsObject.main.temp_max;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    
});
      

window.onload = getWindChill();
function getWindChill() {
    let t = parseFloat( document.getElementById('curTemp').textContent);
    let s = parseFloat(document.getElementById('windSpeed').textContent);
    let windChill = document.getElementById("windChill").innerHTML = "";

    if ((t <= 50) && (s > 3.0)) {
        windChill = (35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * t * (Math.pow(s, 0.16)))).toFixed(0);
       let windChill = document.getElementById('windChill').innerHTML = windChill;
    } 
    else {
        let windChill = document.getElementById("windChill").innerHTML = "N/A" ;
    }
}

var t= document.getElementById("curTemp").textContent;
var s= document.getElementById("windSpeed").textContent;
function windChill(t,s) {
  if((t<=60) && (s>=0)){
    var output = Math.round((35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s,0.16))) + (0.4275 * (t*(Math.pow(s,0.16)))));
  } else{
    var output = "N/A";
  }
  return output;
}
document.getElementById("windChill").textContent = windChill(t,s);







const forecastapi = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";
fetch(forecastapi)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

let forecastapi = jsObject.list.filter(data => data.dt_txt.includes('18:00:00'));
console.log(forecastapi);

let day = "";

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
         
document.getElementById(`weather${day+1}`).textContent = weekday[d.getDay()];
document.getElementById(`forecast${day+1}`).textContent = data.main.temp.toFixed(0) + `°F`;
document.getElementById(`icon${day+ 1}`).setAttribute('src', imageURL);
document.getElementById(`icon${day+ 1}`).setAttribute('alt', weather);
day++;
}) 
});


