/*-----current year-----*/
let y = new Date();
document.getElementById("currentYear").innerHTML = y.getFullYear();

/*-----last updated-----*/
let lu = document.lastModified;
  document.getElementById("lastupdated").innerHTML = lu;