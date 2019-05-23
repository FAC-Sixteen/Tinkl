const forwardTick = document.querySelector('.button__forward');
const forwardButton = document.querySelector('.button__forward--all');
const publicToilet = document.querySelector('#checkbox__public');
const baby = document.querySelector('#checkbox__baby');
const accessible = document.querySelector('#checkbox__accessible');
const free = document.querySelector('#checkbox__free');
const genderNeutral = document.querySelector('#checkbox__genderNeutral');
const error = document.querySelector('.filter__error');
const inputs = document.querySelectorAll('input');

const filterConfirm = () => {
  const url = `/confirm?pub=${publicToilet.checked}&bab=${baby.checked}&acc=${accessible.checked}&fre=${free.checked}&gen=${genderNeutral.checked}`;
  fetch(url)
    .then(() => {
      window.location.href = '/list';
    })
    .catch((err) => {
      error.textContent = 'Oh no. Something went wrong.';
    });
};

forwardTick.addEventListener('click', filterConfirm);
forwardButton.addEventListener('click', filterConfirm);

const changeForwardButton = (direction) => {
  if (direction == true) {
  forwardButton.classList.add('button--invisible');
  forwardTick.classList.remove('button--invisible');
  } else {
  forwardButton.classList.remove('button--invisible');
  forwardTick.classList.add('button--invisible');
  }
}

const checkChange = () => {
  let check = false;
  inputs.forEach((input) => {
    if (input.checked == true) check = true;
  })
  return check;
}

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    changeForwardButton(checkChange())
  })
})

window.onload = () => {
  inputs.forEach((input) => {
    if (input.checked == true) changeForwardButton(true);
  })
}
