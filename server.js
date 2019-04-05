const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const PORT = process.env.PORT || 5000;

let app = express();

app.use(express.static(__dirname + 'public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log("listening on port 5000 -- server");
  });