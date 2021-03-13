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
      let name = document.createElement('p0');
      let motto = document.createElement('p');
      let year = document.createElement('p1');
      let population = document.createElement('p2');
      let rainfall = document.createElement('p3');

      name.textContent = assignTowns[i].name;
      motto.textContent = assignTowns[i].motto;
      year.textContent = "Year Founded: " + assignTowns[i].yearFounded;
      population.textContent = "Population: " + assignTowns[i].currentPopulation;
      rainfall.textContent = "Annual Rain Fall: " + assignTowns[i].averageRainfall;

      photo.setAttribute('src', "images/" + assignTowns[i].photo);
      photo.setAttribute('alt',"The town of" + assignTowns[i].name);

      card.appendChild(photo);
      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(year);
      card.appendChild(population);
      card.appendChild(rainfall);

      
      
      document.querySelector('div.towns').appendChild(card);
    }
  });
  
