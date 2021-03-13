const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial";



fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
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