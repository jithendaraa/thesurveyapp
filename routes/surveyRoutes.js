const mongoose = require('mongoose');
const { Schema } = mongoose;
const Survey = mongoose.model('surveys');
const User = mongoose.model('users');

module.exports = (app) => {

    app.post('/api/newSurvey', async(req, res) => {
        console.log(req.body);

        const survey = await new Survey({
            _user: req.user.id,
            createdByName: req.body.createdByName,
            surveyName: req.body.surveyName,
            questions: req.body.questions
        }).save();

        // const getSurvey = await Survey.findOne({ createdById: req.body.createdById });
        // const surveyId = getSurvey._id;
        

        // const user = await User.findOne({ _id: req.body.createdById });

        // console.log(user)
        console.log("done")

    })

}