const tick = document.querySelector('.button__forward');
const customerOnly = document.querySelector('#checkbox__customerOnly');
const baby = document.querySelector('#checkbox__baby');
const accessible = document.querySelector('#checkbox__accessible');
const free = document.querySelector('#checkbox__free');
const genderNeutral = document.querySelector('#checkbox__genderNeutral');
const error = document.querySelector('.filter__error');

const filterConfirm = () => {
  const url = `/confirm?cus=${customerOnly.checked}&bab=${baby.checked}&acc=${accessible.checked}&fre=${free.checked}&gen=${genderNeutral.checked}`;
  fetch(url)
    .then(() => {
      window.location.href = '/list';
    })
    .catch((err) => {
      error.textContent = 'Oh No. Something went wrong.';
    });
};

tick.addEventListener('click', filterConfirm);
