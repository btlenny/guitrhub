const Guitar = require('../models/guitar');


module.exports = {
    new: newGuitar,
    create,
    index,
  };


function newGuitar(req, res) {
    // We'll want to be able to render an
    // errorMsg if the create action fails
    res.render('guitars/new', { errorMsg: '' });
  }

async function create(req, res) {
    console.log(req.body);
    await Guitar.create(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    res.redirect('/guitars');
  } 


  async function index(req, res) {
    const guitars = await Guitar.find({}).exec();
    res.render('guitars/index', { guitars });
  }
  
  