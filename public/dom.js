const locateMe = document.querySelector('.button__location');

const geolocate = () => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos => {
      const url = `/geolocation?long=${pos.coords.longitude}&lat=${pos.coords.latitude}`
      fetch(url)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log('error', err);
        })
    }, geoError, {timout: 5000})
  } else {
    //browser doesn't have geolocation
  }
};

const geoError= error => {
  switch (error.code) {
    case 3:
      //request timeout
      break;
    case 2:
      //can't get data
      break;
    case 1:
      //permission denied
      break;
  }
}

locateMe.addEventListener('click', geolocate);
