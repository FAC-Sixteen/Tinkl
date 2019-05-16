const locateMe = document.querySelector('.button__location');
const alert = document.querySelector('.location__alert');
const postcodeMe = document.querySelector('.button__postcode');
const postcodeText = document.getElementsByClassName('text__location')[0];

const geolocate = (promise) => {
  promise()
    .then(pos => {
      const url = `/geolocation?long=${pos.longitude}&lat=${pos.latitude}`;
      fetch(url)
        .then(res => {
          window.location.href = '/filter';
        })
        .catch(err => {
          console.log('error', err);
        })
    })
    .catch(err => {
      if (err == true) {
        alert.textContent = 'Sorry, your browser is not compatible with Use My Location.';
        locateMe.disabled = true;
      } else {
        console.log('postcode not good')
      }
    })
};

const useLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        resolve(pos.coords);
      }, geoError, {timeout: 10000});
    } else {
      reject(true);
    }
  })
}

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

locateMe.addEventListener('click', () => {
  geolocate(useLocation);
});


const usePostcode = () => {
  return new Promise((resolve, reject) => {
    const regex = '^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR ?0AA)$';
    if (postcodeText.value.match(regex)) {
      const postcode = postcodeText.value.replace(' ', '%20%');
      const url = `/postcode?postcode=${postcode}`
      console.log(url);
      fetch(url)
        .then(json => {
          resolve(json)
        })
        .catch(err => {
          reject(err)
        })
    } else {
      reject(false)
    }
  })
}

postcodeMe.addEventListener('click', () => {
  geolocate(usePostcode)
});
