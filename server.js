const express = require('express');

const activities = require('./Routes/activities_routes');

const port = process.env.PORT || 5000

const app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({    
  extended: true
})); 

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

app.use(express.json());


app.use('/activities', activities);

app.get('/', (req, res) => {
    res.json({message: "here is your activities home"})
})

// module.exports = server;