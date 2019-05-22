exports.get = (req, res) => {
  res.render('list', {
    pageTitle: 'Near You', navBack: '/filter', navForward: '/', listItemArray,
  });
};

// array will come from database query given the filters selected
const listItemArray = [
  {
    name: 'Waterstones',
    distance: '10 metres away',
    customer_toilet: true,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
  {
    name: 'Waterstones',
    distance: '10 metres away',
    customer_toilet: false,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
  {
    name: 'Waterstones',
    distance: '10 metres away',
    customer_toilet: true,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
  {
    name: 'Waterstones',
    distance: '10 metres away',
    customer_toilet: true,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
  {
    name: 'Waterstones',
    distance: '10 metres away',
    customer_toilet: true,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
  {
    name: 'Abercombe Council',
    distance: '10 metres away',
    customer_toilet: true,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
  {
    name: 'Waterstones',
    distance: '10 metres away',
    customer_toilet: false,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
  {
    name: 'Pret',
    distance: '10 metres away',
    customer_toilet: true,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
  {
    name: 'Toilet',
    distance: '10 metres away',
    customer_toilet: true,
    address: '2-4 The Broadway, Crouch End, London N8 9SN',
    accessible: true,
    baby_changing: true,
    price: 0,
    gender_neutral: true,
    map_link: 'https://assets.change.org/photos/5/sw/sy/JySWsYeBDXQvWna-800x450-noPad.jpg?1551704785'
  },
];
