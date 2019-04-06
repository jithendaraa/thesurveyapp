const mongoose = require('mongoose');
const { Schema } = mongoose;
const Survey = mongoose.model('surveys');
const User = mongoose.model('users');

module.exports = (app) => {

    app.post('/api/newSurvey', async(req, res) => {

        const survey = await new Survey({
            _user: req.user.id,
            createdByName: req.body.createdByName,
            surveyName: req.body.surveyName,
            questions: req.body.questions
        }).save();

        console.log("new survey created");
        res.send(req.body);

    });

    app.get('/api/mySurveys', async(req, res) => {
        const surveys = await Survey.find({ _user: req.user.id });
        console.log('my surveys fetched')
        // console.log(surveys);
        res.send(surveys);
    });

    app.get('/api/allSurveys', async(req, res) => {
        const surveys = await Survey.find({});
        console.log('all surveys fetched')
        // console.log(surveys);
        res.send(surveys);
    });

    

}