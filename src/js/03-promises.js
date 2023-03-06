const refs = {
  form: document.querySelector(`.form`),
  // delay: document.querySelector(`input[name="delay"]`),
  // step: document.querySelector(`input[name="step"]`),
  // amount: document.querySelector(`input[name="amount"]`),
  button: document.querySelector(`button`),
};
let submitArray = {};
refs.form.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  // const {
  //   elements: { delay, step, amount },
  // } = event.currentTarget;
  console.log(event.currentTarget.elements.delay.value);
  console.log(event.currentTarget.elements.step.value);
  console.log(event.currentTarget.elements.amount.value);

  // console.log(
  //   `delay: ${delay.value}, step: ${step.value}, amount: ${amount.value}`
  // );
  // formSubmit = {
  //   delay: `${refs.delay}`,
  //   step: `${refs.step}`,
  //   amount: `${refs.step}`,
  // };
  // console.log(formSubmit);
}

// for (let i = 0; i < amount; i += 1) {
//   delay += step;
// }
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
