const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notes-db-app', { useNewUrlParser: true }, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(db=> console.log('DB is connected'))
    .catch(err=>console.error(err));
 