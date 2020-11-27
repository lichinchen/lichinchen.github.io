
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




