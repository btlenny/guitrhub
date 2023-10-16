module.exports = {
    new: newGuitar,
  };


  function newGuitar(req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
    res.render('guitars/new', { errorMsg: '' });
  }