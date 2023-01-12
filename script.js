const NEWYEAR = '1 Jan 2024';
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;
const SPAN_DAYS = document.getElementById('days');
const SPAN_HOURS = document.getElementById('hours');
const SPAN_MINUTES = document.getElementById('minutes');
const SPAN_SECONDS = document.getElementById('secs');

const countdown = () => {
    const currentDate = new Date();
    const newYearDate = new Date(NEWYEAR);
    const countdownVar = newYearDate - currentDate;
    const REMAINING_DAYS = Math.floor(countdownVar / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((countdownVar % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((countdownVar % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((countdownVar % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    
    SPAN_DAYS.innerHTML = REMAINING_DAYS;
    SPAN_HOURS.innerHTML = REMAINING_HOURS;
    SPAN_MINUTES.innerHTML = REMAINING_MINUTES;
    SPAN_SECONDS.innerHTML = REMAINING_SECONDS;

}

countdown();

setInterval(countdown, 1000);