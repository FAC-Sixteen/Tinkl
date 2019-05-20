const tick = document.querySelector('.button__forward');
const customerOnly = document.querySelector('#checkbox__customerOnly');
const baby = document.querySelector('#checkbox__baby');
const accessible = document.querySelector('#checkbox__accessible');
const free = document.querySelector('#checkbox__free');
const genderNeutral = document.querySelector('#checkbox__genderNeutral');

const filterConfirm = () => {
  console.log(customerOnly.value);
}

tick.addEventListener('click', filterConfirm);