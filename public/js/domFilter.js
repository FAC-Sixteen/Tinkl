const tick = document.querySelector('.button__forward');
const public = document.querySelector('#checkbox__public');
const baby = document.querySelector('#checkbox__baby');
const accessible = document.querySelector('#checkbox__accessible');
const free = document.querySelector('#checkbox__free');
const genderNeutral = document.querySelector('#checkbox__genderNeutral');
const error = document.querySelector('.filter__error');

const filterConfirm = () => {
  const url = `/confirm?pub=${public.checked}&bab=${baby.checked}&acc=${accessible.checked}&fre=${free.checked}&gen=${genderNeutral.checked}`;
  fetch(url)
    .then(() => {
      window.location.href = '/list';
    })
    .catch((err) => {
      error.textContent = 'Oh no. Something went wrong.';
    });
};

tick.addEventListener('click', filterConfirm);
