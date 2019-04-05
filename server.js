const express = require('express');

const mongoose = require('mongoose');
const keys = require('./config/keys');
const http = require('http');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

let app = express();

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }).then(() => console.log("connected <3")); 

require('./routes/authRoutes')(app);


// app.use(express.static(__dirname + 'public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listening on port 5000 -- server");
  });