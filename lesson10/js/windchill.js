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

