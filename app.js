function getTime() {
let clockFace = document.getElementById('currentTime');

let currentTime = new Date();

let hourOfDay = currentTime.getHours();
hourOfDay = ( hourOfDay < 10 ? "0" : "" ) + hourOfDay;
hourOfDay = ( hourOfDay > 12 ) ? hourOfDay - 12 : hourOfDay;
hourOfDay = ( hourOfDay == 0 ) ? "12" : hourOfDay;

let minuteOfDay = currentTime.getMinutes();
minuteOfDay = ( minuteOfDay < 10 ? "0" : "") + minuteOfDay;

let am_or_pm = ( hourOfDay < 12 ? "AM" : "PM");

let timeOfDay = `${hourOfDay}:${minuteOfDay} ${am_or_pm}`;
clockFace.innerHTML = timeOfDay;
console.log(timeOfDay);
};

getTime();
setInterval(getTime, 1000);