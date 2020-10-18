
const menubutton = document.querySelector('.responsive-menu');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive-menu')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive-menu')};


const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);
