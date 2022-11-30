const { connect, connection } = require('mongoose');

const url = 'mongodb://localhost:27017/socialsDB'

connect(url, {useNewUrlParser: true, useUnifiedTopology: true,}, (err) => {
  if (err) throw err;
});

module.exports = connection;