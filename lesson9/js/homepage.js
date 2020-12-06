const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    function townName(town) {
      if (town.name == "Preston" || town.name == "Fish Haven" || town.name == "Soda Springs") {
        return true;
      }
    };

    let assignTowns = towns.filter(townName);
    
    for (let i = 0; i < assignTowns.length; i++) {
      let card = document.createElement('section');
      
      let photo = document.createElement('img');
      let name = document.createElement('h2');
      let motto = document.createElement('p');
      let year = document.createElement('div');
      let population = document.createElement('div');
      let rainfall = document.createElement('div');
      let info = document.createElement('dl');
          info.setAttribute('class', 'info');
      let yearNum = document.createElement('dt');
      let popNum = document.createElement('dt');
      let rainNum = document.createElement('dt');
      let yearTag = document.createElement('dd');
      let popTag = document.createElement('dd');
      let rainTag = document.createElement('dd');

      name.textContent = assignTowns[i].name;
      motto.textContent = assignTowns[i].motto;
      yearNum.textContent = assignTowns[i].yearFounded;
      popNum.textContent = assignTowns[i].currentPopulation;
      rainNum.textContent = assignTowns[i].averageRainfall;

      yearTag.textContent = "Year";
      popTag.textContent = "Population";
      rainTag.textContent = "Rain";
      photo.setAttribute('src', "images/" + assignTowns[i].photo);
      photo.setAttribute('alt', assignTowns[i].name);

      card.appendChild(photo);
      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(info);

      info.appendChild(year);
      info.appendChild(population);
      info.appendChild(rainfall);

      year.appendChild(yearNum);
      year.appendChild(yearTag);

      population.appendChild(popNum);
      population.appendChild(popTag);
      
      rainfall.appendChild(rainNum);
      rainfall.appendChild(rainTag);
      
      document.querySelector('div.towns').appendChild(card);
    }
  });
  
