const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5539d42cf2d71dde5c4f1a28929669c0&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
  const curtemp = document.querySelector('#current-temp');
  const weathericon = document.querySelector('#icon');
  const iconscource = document.querySelector('#imagesrc');
  curtemp.innerHTML = jsObject.main.temp;
  iconsource.textContent = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
  const isrc = 'https://openweathermap.org/img/w/${Object.weather[0].icon}.png';
  weathericon.setAttribute('src', isrc);
  weathericon.setAttribute('alt', Object.weather[0].description);
  

/*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);*/