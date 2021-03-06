const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const http = require('http');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

let app = express();

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }).then(() => console.log("connected <3")); 



app.use(express.static(__dirname + 'public'));
app.use(bodyParser.json());
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/responseRoutes')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listening on port 5000 -- server");
  });