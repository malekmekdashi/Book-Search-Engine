const mongoose = require('mongoose');
// const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', {});


// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

module.exports = mongoose.connection;
