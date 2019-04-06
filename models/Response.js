const mongoose = require('mongoose');
const { Schema } = mongoose;

const responseSchema = new Schema({
    responseById: String,
    responseByName: String,
    response: [String],
    _user: {type: Schema.Types.ObjectId, ref: 'Survey'}
});

mongoose.model('responses', responseSchema);                    //Create a new collection called 'users' with the userSchema