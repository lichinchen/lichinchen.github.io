/*----- Hamburger Button------*/
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }
  
  
function toggleMenuRemove(){
  document.getElementsByClassName("navigation")[0].classList.remove("responsive");
  }
  
/*-----current year-----*/
  let y = new Date();
  document.getElementById("currentYear").innerHTML = y.getFullYear();
  /*-----Current date-----*/
  const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
  document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);
  
/*-----banner-----*/
  let date = new Date();
  date.getDay()
  if (date.getDay()==5){
    document.querySelector(".onlyFri").style.display="block" 
  }
  
  
 
/*-----web font-----*/
WebFont.load({google: {families: ['Open Sans', 'Hachi Maru Pop', ]}});