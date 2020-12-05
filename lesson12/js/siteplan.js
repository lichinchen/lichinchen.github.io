/*---currentdate---*/
const options = {year: 'numeric'};
    document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', options);

/*-----lastupdate----*/
document.getElementById('lastupdated').innerHTML = document.lastModified

/*-----webfont-----*/
WebFont.load({google: {families: ['Roboto', 'Ubuntu', ]}});



