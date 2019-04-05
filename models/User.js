const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    email: String,
    displayName: String,
    surveyTitles: [String]
});

mongoose.model('users', userSchema);                    //Create a new collection called 'users' with the userSchema