const express = require('express');
require('./services/passport');
const mongoose = require('mongoose');
const http = require('http');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

let app = express();

require('./routes/authRoutes')(app);







// app.use(express.static(__dirname + 'public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//Client ID: 303008842237-q4d50j6334a0i0221ups5dpegbigpv9u.apps.googleusercontent.com
//Client Secret eu5t2rzniw5E00h5wWVGJb4L



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listening on port 5000 -- server");
  });