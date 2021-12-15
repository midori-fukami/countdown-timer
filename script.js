setInterval(function() {
    update();
}, 1000);

let end = new Date('12/25/2021 00:00 AM');

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function update() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "It's Christmas!!!";
        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('day').innerHTML = addZero(days);
    document.getElementById('hour').innerHTML = addZero(hours);
    document.getElementById('minute').innerHTML = addZero(minutes);
    document.getElementsByClassName('second')[0].innerHTML = addZero(seconds);
    document.getElementsByClassName('second')[1].innerHTML = addZero(seconds);
}

const addZero = (number) => String(number).padStart(2, '0')