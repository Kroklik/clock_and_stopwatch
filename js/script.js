const hourArrow = document.querySelector('.h'),
    minuteArrow = document.querySelector('.m'),
    secondArrow = document.querySelector('.s'),
    hours_html = document.querySelector('.hours'),
    minutes_html = document.querySelector('.minutes');


function watch() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();

    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    hours_html.innerHTML = hours < 10 ? '0' + hours : hours
    minutes_html.innerHTML = minutes < 10 ? '0' + minutes : minutes

    setTimeout(() => watch(), 1000)
}

// рекурсия запускает саму себя внутри

watch()

const links = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((elem, i) => {
        elem.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


const stopwatch_seconds = document.querySelector('.stopwatch__seconds');
const stopwatch_minutes = document.querySelector('.stopwatch__minutes');
const stopwatch_hours = document.querySelector('.stopwatch__hours');
const startBtn = document.querySelector('.stopwatch__btn');
const span = document.querySelector('.tabsLink__span');
let st_seconds = 0;
let timer = null;
let st_minutes = 0;
let st_hours = 0;

function addSeconds() {
    st_seconds += 1;
    if (st_seconds > 59) {
        st_seconds = 0;
        st_minutes += 1;
        stopwatch_minutes.innerHTML = st_minutes;
        stopwatch_seconds.innerHTML = st_seconds;
    } else {
        stopwatch_seconds.innerHTML = st_seconds;
    }

    if (st_minutes > 59) {
        st_minutes = 0;
        st_hours += 1;
        stopwatch_hours.innerHTML = st_hours;
        stopwatch_minutes.innerHTML = st_minutes;
    }
}

function handleStartAndStop() {
    if (timer === null) {
        timer = setInterval(addSeconds, 1000);
        startBtn.innerHTML = 'stop';
        span.classList.add('active');
    } else {
        clearInterval(timer);
        timer = null;
        startBtn.innerHTML = 'clear';
        span.classList.remove('active');
        span.classList.add('active_clear');
    }
}

function handleClear() {
    if (startBtn.innerHTML === 'clear') {
        clearInterval(timer);
        timer = null;
        st_seconds = 0;
        st_minutes = 0;
        st_hours = 0;
        stopwatch_seconds.innerHTML = st_seconds;
        stopwatch_minutes.innerHTML = st_minutes;
        stopwatch_hours.innerHTML = st_hours;
        startBtn.innerHTML = 'start';
        span.classList.remove('active_clear');
    }
}

function start() {
    startBtn.addEventListener('click', () => {
        if (startBtn.innerHTML === 'start' || startBtn.innerHTML === 'stop') {
            handleStartAndStop();
        } else if (startBtn.innerHTML === 'clear') {
            handleClear();
        }
    });
}

start();
console.log(st_seconds)