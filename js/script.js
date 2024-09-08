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
let st_minutes = 0;
let st_hours = 0;
let timer = null;

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

function start() {
    startBtn.addEventListener('click', () => {
        if (startBtn.innerHTML === 'start') {
            timer = setInterval(addSeconds, 1000)
            startBtn.innerHTML = 'stop'
            span.classList.add('active')
        } else if (startBtn.innerHTML === 'stop') {
            clearInterval(timer)
            startBtn.innerHTML = 'clear'
            span.classList.remove('active')
            span.classList.add('active_clear')
        } else if (startBtn.innerHTML === 'clear') {
            clearInterval(timer)
            startBtn.innerHTML = 'start'
            st_seconds = 0
            st_minutes = 0
            st_hours = 0
            stopwatch_minutes.innerHTML = st_minutes;
            stopwatch_seconds.innerHTML = st_seconds;
            stopwatch_hours.innerHTML = st_hours;
            span.classList.remove('active_clear')
        }
    })
}

start()


