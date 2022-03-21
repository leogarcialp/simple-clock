const date = new Date();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const hourSystem = document.querySelector('.hour-system');


function clock() {
   let h = date.getHours();
   let m = new Date().getMinutes(); //doesn't work w/ date variable had to create a new Date()
   let s = new Date().getSeconds(); //doesn't work w/ date variable had to create a new Date()
   let am = "AM";

   // am-pm 
   if (h > 12) {
      h = h - 12;
      am = "PM";
   }

   // show in html
   hours.innerHTML = h;
   minutes.innerHTML = m;
   seconds.innerHTML = s;
   hourSystem.innerHTML = am;
}

setInterval(clock, 1000);


// Get day name
document.querySelector('.day').innerHTML = days[date.getDay()];


// Get date format
if(month < 10){
   document.querySelector('.full-date').innerHTML = `${day}-0${month}-${year}`;
} else {
   document.querySelector('full-date').innerHTML = `${day}-${month}-${year}`;
}