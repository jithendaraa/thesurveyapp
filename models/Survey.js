const mongoose = require('mongoose');
const { Schema } = mongoose;
const responseSchema = require('./Response');

const surveySchema = new Schema({
    createdById: String,
    createdByName: String,
    surveyName: String,
    questions: [String],
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('surveys', surveySchema);                    //Create a new collection called 'users' with the userSchema