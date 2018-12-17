
const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const check = require('./checker.js');

app.set('port', (process.env.PORT || 5000));




// a useless function that returns a fixed object. you can use it, if you want, for testing purposes
app.get('/count',function (req, res) {
    res.json({count: 3})
<<<<<<< HEAD
=======
})


app.get('/counts',function (req, res) {
  var lato1 =parseInt(req.query.lato1)
  var lato2=parseInt(req.query.lato2)
  console.log(lato1,lato2)
  res.status(200).json({'area': lato1*lato2});

})

app.post('/', (req, res) => {
        var propertiesPost = req.body;
        var num =parseInt( propertiesPost.expectedResultStatus)
        console.log(propertiesPost.url, propertiesPost.invocationParameters,propertiesPost.expectedResultData, parseInt(propertiesPost.expectedResultStatus))
        var response=check(propertiesPost.url, propertiesPost.invocationParameters,propertiesPost.expectedResultData, num)

        .then(function(result) {
        res.send(result)
    });

>>>>>>> checker
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
