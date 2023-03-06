const refs = {
  startButton: document.querySelector(`button[data-start]`),
  stopButton: document.querySelector(`button[data-stop]`),
};

refs.startButton.addEventListener(`click`, onStart);
refs.stopButton.addEventListener(`click`, onStop);

let intervalId = '';
refs.stopButton.setAttribute(`disabled`, true);

function onStart() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startButton.setAttribute(`disabled`, true);
  refs.stopButton.removeAttribute(`disabled`);
}

function onStop() {
  clearInterval(intervalId);
  refs.startButton.removeAttribute(`disabled`);
  refs.stopButton.setAttribute(`disabled`, true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
