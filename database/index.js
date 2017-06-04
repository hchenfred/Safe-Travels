const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/safeTravel');
mongoose.connect('mongodb://heroku_wrrqkjq6:j3jkn9qp4l1oin1k6n817vl94v@ds161931.mlab.com:61931/heroku_wrrqkjq6');

const db = mongoose.connection;

db.on('error', console.error.bind('console', 'error connecting mongoose'));
db.once('open', () => {
  console.log('success connecting mongoose');
});

module.exports = db;
