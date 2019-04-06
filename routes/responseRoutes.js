const mongoose = require('mongoose');
const { Schema } = mongoose;
const Survey = mongoose.model('surveys');
const User = mongoose.model('users');
const Response = mongoose.model('responses');

module.exports = (app) => {

    app.post('/api/newResponse', async(req, res) => {
        const response = await new Response({
            _survey: req.body.surveyId,
            responseById: req.body.responseById,
            response: req.body.response,
            responseByName: req.body.responseByName
        }).save();
        console.log("Response given")
        res.send(req.body);
    });

    app.get('/api/responses', async(req, res) => {
        const responses = await Response.find({});
        console.log("all responses fetched");
        res.send(responses);
    })

    

}