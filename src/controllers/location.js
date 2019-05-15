exports.get = (req, res) => {
  res.render('location', {pageTitle: 'Where are you?', navBack: '/', navForward: '/filter'});
}
