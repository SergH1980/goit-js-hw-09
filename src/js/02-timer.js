import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startButton: document.querySelector(`button[data-start]`),
  picker: document.querySelector(`#datetime-picker`),
  days: document.querySelector(`[data-days]`),
  hours: document.querySelector(`[data-hours]`),
  minutes: document.querySelector(`[data-minutes]`),
  seconds: document.querySelector(`[data-seconds]`),
};

refs.startButton.setAttribute(`disabled`, true);

let timeLeft = 0;
let intervalId = 0;
let initialTimeDifference = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    initialTimeDifference = selectedDates[0] - Date.now();
    if (initialTimeDifference < 0) {
      refs.startButton.setAttribute(`disabled`, true);
      Notiflix.Notify.warning(`Please choose a date in the future!`);
      return;
    }
    refs.startButton.removeAttribute(`disabled`);

    refs.startButton.addEventListener(`click`, onCounterStart);

    function onCounterStart(event) {
      startCounter();
    }

    function startCounter() {
      intervalId = setInterval(toCalculateCounter, 1000);
    }

    function toCalculateCounter() {
      timeLeft = selectedDates[0] - Date.now();
      let timeLeftArray = convertMs(timeLeft);
      refs.days.textContent = timeLeftArray.days;
      refs.hours.textContent = timeLeftArray.hours;
      refs.minutes.textContent = timeLeftArray.minutes;
      refs.seconds.textContent = timeLeftArray.seconds;
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        clearCounter();
      }
    }
  },
};

const fp = flatpickr(refs.picker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
}

function clearCounter() {
  refs.days.textContent = `00`;
  refs.hours.textContent = `00`;
  refs.minutes.textContent = `00`;
  refs.seconds.textContent = `00`;
}
