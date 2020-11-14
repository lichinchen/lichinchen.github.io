
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    function townName(item) {
      if (item.name == "Preston" || item.name == "Fish Haven" || item.name == "Soda Springs") {
        return true;
      }
    };
    let assignTowns = towns.filter(townName);
    for (let i = 0; i < assignTowns.length; i++) {
      let card = document.createElement('section');
      let townDatas = document.createElement('dl');
      townDatas.setAttribute('class', 'townDatas');
      let photo = document.createElement('img');
      let name = document.createElement('h2');
      let motto = document.createElement('p');
      let year = document.createElement('div');
      let population = document.createElement('div');
      let rainfall = document.createElement('div');
      let yearNum = document.createElement('dt');
      let popNum = document.createElement('dt');
      let rainNum = document.createElement('dt');
      let yearLabel = document.createElement('dd');
      let popLabel = document.createElement('dd');
      let rainLabel = document.createElement('dd');
      name.textContent = assignTowns[i].name;
      motto.textContent = assignTowns[i].motto;
      yearNum.textContent = assignTowns[i].yearFounded;
      popNum.textContent = assignTowns[i].currentPopulation;
      rainNum.textContent = assignTowns[i].averageRainfall + "\"";
      yearLabel.textContent = "Founded";
      popLabel.textContent = "Population";
      rainLabel.textContent = "Rain/yr";
      photo.setAttribute('src', "images/" + assignTowns[i].photo);
      photo.setAttribute('alt', "The town of " + assignTowns[i].name);
      card.appendChild(photo);
      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(townDatas);
      townDatas.appendChild(year);
      townDatas.appendChild(population);
      townDatas.appendChild(rainfall);
      year.appendChild(yearNum);
      year.appendChild(yearLabel);
      population.appendChild(popNum);
      population.appendChild(popLabel);
      rainfall.appendChild(rainNum);
      rainfall.appendChild(rainLabel);
      document.querySelector('div.cards').appendChild(card);
    }
  });

/*  
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   function townName(item) {
     if (item.name == "Preston" || item.name == "Fish Haven" || item.name == "Soda Springs") {
       return true;
     }
   };
   let assignTowns = towns.filter(townName);
   for (let i = 0; i < assignTowns.length; i++) {
     let card = document.createElement('section');
     let townStats = document.createElement('dl');
     townStats.setAttribute('class', 'townStats');
     let photo = document.createElement('img');
     let name = document.createElement('h2');
     let motto = document.createElement('p');
     let yearFounded = document.createElement('b');
     let currentPopulation = document.createElement('b');
     let averageRainfall = document.createElement('b');
     let yearNum = document.createElement('n');
     let populationNum = document.createElement('n');
     let rainfallNum = document.createElement('n');
     let yearLabel = document.createElement('l');
     let populationLabel = document.createElement('l');
     let rainfallLabel = document.createElement('l');
     name.textContent = assignTowns[i].name;
     motto.textContent = assignTowns[i].motto;
     yearNum.textContent = assignTowns[i].yearFounded;
     populationNum.textContent = assignTowns[i].currentPopulation;
     rainfallNum.textContent = assignTowns[i].averageRainfall + "\"";
     yearLabel.textContent = "Founded";
     populationLabel.textContent = "Population";
     rainfallLabel.textContent = "Rain/yr";
     photo.setAttribute('src', "images/" + assignTowns[i].photo);
     photo.setAttribute('alt', "The town of " + assignTowns[i].name);
     card.appendChild(photo);
     card.appendChild(name);
     card.appendChild(motto);
     card.appendChild(townStats);
     townStats.appendChild(yearFounded);
     townStats.appendChild(currentPopulation);
     townStats.appendChild(averageRainfall);
     yearFounded.appendChild(yearNum);
     yearFounded.appendChild(yearLabel);
     currentPopulation.appendChild(populationNum);
     currentPopulation.appendChild(populationLabel);
     averageRainfall.appendChild(rainfallNum);
     averageRainfall.appendChild(rainfallLabel);
     document.querySelector('div.cards').appendChild(card);
   }
 });
*/

