exports.client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    errorMessage: 'Urine trouble! No toilets here.',
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    errorMessage: 'Oops, there has been a little accident...',
  });
};
