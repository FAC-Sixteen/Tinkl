const locateMe = document.querySelector('.button__location');
const alert = document.querySelector('.location__alert');

const geolocate = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const url = `/geolocation?long=${pos.coords.longitude}&lat=${pos.coords.latitude}`;
      fetch(url)
        .then(res => {
          window.location.href = '/filter';
        })
        .catch(err => {
          console.log('error', err);
        })
    }, geoError, {timeout: 5000})
  } else {
    alert.textContent = 'Sorry, your browser is not compatible with Use My Location.'
    locateMe.disabled = true; 
  }
};

const geoError = error => {
  switch (error.code) {
    case 3:
      alert.textContent = 'Oops, the request timed out.';
      break;
    case 2:
      alert.textContent = 'Oh dear, looks like your location is unavailable at the moment.';
      break;
    case 1:
      alert.textContent = 'Please allow location permissions to use this feature.';
      break;
  }
}

locateMe.addEventListener('click', geolocate);
