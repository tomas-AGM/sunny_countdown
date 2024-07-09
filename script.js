$(document).ready(function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    // Calculate the initial time difference
    var now = new Date().getTime();
    var distance = countDownDate - now;
    
    // Initialize the FlipClock
    var clock = $('.clock').FlipClock(distance / 1000, {
        clockFace: 'DailyCounter',
        countdown: true,
        callbacks: {
            stop: function() {
                $('.clock').html("EXPIRED");
            }
        }
    });
});
