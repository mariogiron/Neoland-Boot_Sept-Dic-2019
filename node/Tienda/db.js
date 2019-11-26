const mongoose = require('mongoose');

const databaseUrl = 'mongodb://127.0.0.1:27017/neoland';

mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
