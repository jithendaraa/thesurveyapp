const mongoose = require('mongoose');
const { Schema } = mongoose;
const surveySchema = require('./Survey');

const userSchema = new Schema({
    googleId: String,
    email: String,
    displayName: String
});

mongoose.model('users', userSchema);                    //Create a new collection called 'users' with the userSchema