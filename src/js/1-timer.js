// ===========Librarys==============
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/bi_x-octagon.png';
// ===========Variables===============
const timer = document.querySelector('.timer-box');
let date = Date.now();
let userSelectedDate;

// =============Create Timer================
function timerTemplate() {
	return `<input type="text" id="datetime-picker" placeholder="Оберіть дату та час"/>
<button class="startBtn" type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>`
}

timer.innerHTML = timerTemplate();

// =========Initialization and setting Flatpickr=============
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
			userSelectedDate = selectedDates[0];
			if (userSelectedDate < date) {
				iziToast.show({
					iconUrl: iconError,
					message: 'Please choose a date in the future',
					messageColor: '#FFFFFF',
        	backgroundColor: '#B51B1B',
        	position: 'topRight',
			});
		} else {
			startBtn.disabled = false;
      startBtn.style.background = '#4E75FF';
			startBtn.style.color = '#FFF';;
		}
  },
};
flatpickr('#datetime-picker', options);

// ===============Settings Btn=================
const startBtn = document.querySelector('.startBtn');
startBtn.disabled = true;
let difference;
let setIntervalId;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  startBtn.style.background = '#CFCFCF';
	startBtn.style.color = '#989898';
  difference = userSelectedDate - Date.now();
  timerNumber(convertFromMilleseconds(difference));
  setIntervalId = setInterval(() => {
    difference -= 1000;
    timerNumber(convertFromMilleseconds(difference));
    stopTimer(difference);
  }, 1000);
});

function stopTimer(difference) {
  if (difference <= 1000) {
    clearInterval(setIntervalId);
  }
}

// =========Converting date===========
function convertFromMilleseconds(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// ================Showing results=================
const day = document.querySelector('.value[ data-days]');
const hour = document.querySelector('.value[ data-hours]');
const minute = document.querySelector('.value[ data-minutes]');
const second = document.querySelector('.value[ data-seconds]');

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function timerNumber({ days, hours, minutes, seconds }) {
  day.textContent = `${addLeadingZero(days)}`;
  hour.textContent = `${addLeadingZero(hours)}`;
  minute.textContent = `${addLeadingZero(minutes)}`;
  second.textContent = `${addLeadingZero(seconds)}`;
}