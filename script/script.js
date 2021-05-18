//window.addEventListener('DOMContentloaded', function(){
    'use strict';

    //Timer
    function countTimer(deadline){
        let idInterval,
            timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining /60) % 60),
                hours = Math.floor(timeRemaining /60 /60);
            return {timeRemaining, hours, minutes, seconds};
        }
        function fixPrint(x){
            if (x<10) {
                return '0' + x;
            }
            return x;
        }
        function updateClock(){
            let timer = getTimeRemaining();    
            timerHours.textContent = fixPrint(timer.hours);
            timerMinutes.textContent = fixPrint(timer.minutes);
            timerSeconds.textContent = fixPrint(timer.seconds);
            if (timer.timeRemaining>0){
                if (idInterval){
                    return;
                } else {
                    idInterval = setInterval(updateClock, 1000);
                }
            } else {
                clearInterval(setInterval(updateClock, 1000));
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }

        updateClock();
    }

    countTimer('2 may 2021');

//});