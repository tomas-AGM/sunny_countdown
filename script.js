$(document).ready(function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Initialize the FlipClock
    var clock = $('.clock').FlipClock(distance / 1000, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});
