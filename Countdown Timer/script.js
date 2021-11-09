let daysEL = document.getElementById("days")
let hoursEL = document.getElementById("hours")
let minutesEL = document.getElementById("minutes")
let secondsEL = document.getElementById("seconds")

const newYear = "1 Jan 2022";

function countdown() {
    let newYearDate = new Date(newYear);
    let currentDate = new Date();

    let totalSeconds =  (newYearDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds);

    daysEL.innerHTML = formatTime(days);
    hoursEL.innerHTML = formatTime(hours);
    minutesEL.innerHTML = formatTime(minutes);
    secondsEL.innerHTML = formatTime(seconds);
     
}

function formatTime(time) {

    // return time < 10 ? `0${time}` : time;

    if (time < 10){
        time = `0${time}`;
    }
    return(time);
}

//initial cell
countdown();

setInterval(countdown, 1000);