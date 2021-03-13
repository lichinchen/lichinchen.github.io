const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";



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
      

window.onload = function windChill() {
  let t = parseFloat(document.getElementById('curTemp').textContent);
  let s= parseFloat(document.getElementById('windSpeed').textContent); 
  let output = "N/A";
  if (t<= 50 && s>=3){
  let f = (35.74 + (0.6215*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275*(t*(Math.pow(s , 0.16))));
  output = Math.round(f);
  }
  document.getElementById("windChill").innerHTML = output;
}



const forecastapi = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";

fetch(forecastapi)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

let forecastapi = jsObject.list.filter(data => data.dt_txt.includes('18:00:00'));
console.log(forecastapi);

let n = "";

let weekday = new Array(7);
      weekday[0] = "Sun.";
      weekday[1] = "Mon.";
      weekday[2] = "Tue.";
      weekday[3] = "Wed.";
      weekday[4] = "Thu.";
      weekday[5] = "Fri.";
      weekday[6] = "Sat.";
var month = new Array();
      month[0] = "1";
      month[1] = "2";
      month[2] = "3";
      month[3] = "4";
      month[4] = "5";
      month[5] = "6";
      month[6] = "7";
      month[7] = "8";
      month[8] = "9";
      month[9] = "10";
      month[10] = "11";
      month[11] = "12";


forecastapi.forEach(data => {
  let d = new Date(data.dt_txt); 
  let weather = data.weather[0].description;
  let imageURL = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
         
document.getElementById(`day${n+1}`).textContent = weekday[d.getDay()];
document.getElementById(`date${n+1}`).textContent = month[d.getMonth()]+"/"+d.getDate();
document.getElementById(`temp${n+1}`).textContent = data.main.temp.toFixed(0) + `°F`;
/*document.getElementById(`desc${n+1}`).textContent = (data.weather[0].description);*/
document.getElementById(`icon${n+1}`).setAttribute('src', imageURL);
document.getElementById(`icon${n+1}`).setAttribute('alt', weather);
n++;
}) 
});


