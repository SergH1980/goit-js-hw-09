import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(`.form`),
  button: document.querySelector(`button`),
};
refs.form.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  let initialDelay = Number(delay.value);
  let assignedStep = Number(step.value);

  for (let i = 1; i <= amount.value; i += 1) {
    let everyDelay = initialDelay + i * assignedStep;
    createPromise(i, everyDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
