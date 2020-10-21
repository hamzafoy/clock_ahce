function getTime() {
    let clockFace = document.getElementById('currentTime');

    let currentTime = new Date();

    let hourOfDay = currentTime.getHours();
    let am_or_pm = (hourOfDay < 12 ? "AM" : "PM");
    hourOfDay = (hourOfDay < 10 ? "0" : "") + hourOfDay;
    hourOfDay = (hourOfDay > 12) ? hourOfDay - 12 : hourOfDay;
    hourOfDay = (hourOfDay == 0) ? "12" : hourOfDay;

    let minuteOfDay = currentTime.getMinutes();
    minuteOfDay = (minuteOfDay < 10 ? "0" : "") + minuteOfDay;

    

    let timeOfDay = `${hourOfDay}:${minuteOfDay} ${am_or_pm}`;
    clockFace.innerHTML = timeOfDay;
};

function getDate() {
    let dateDisplay = document.getElementById('currentDateToday');
    let daysOfTheWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let currentTime = new Date();

    let day = currentTime.getDay();
    let dayToday = daysOfTheWeek[`${day}`];
    let month = currentTime.getMonth();
    let monthToday = months[`${month}`];
    let dateToday = currentTime.getDate();
    let yearToday = currentTime.getFullYear();

    let dateMessage = `Today is ${dayToday}, ${monthToday} ${dateToday} ${yearToday}`;
    dateDisplay.innerHTML = dateMessage;
}

getTime();
getDate();
setInterval(getTime, 1000);