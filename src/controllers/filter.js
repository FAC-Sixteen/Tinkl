exports.get = (req, res) => {
    res.render('filter', {pageTitle: 'Filter', navBack: '/location', navForward: '/list'});
}