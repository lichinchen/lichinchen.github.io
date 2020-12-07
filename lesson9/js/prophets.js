const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let bDate = document.createElement('p');
      let bPlace = document.createElement('p');
      let image = document.createElement('img');

      name.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      bDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      bPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;

      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' ' + '-' + ' ' + prophets[i].order);

      card.appendChild(name);
      card.appendChild(bDate);
      card.appendChild(bPlace);
      card.appendChild(image);
      
      document.querySelector('div.cards').appendChild(card);
    }
  });