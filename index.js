const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

mongoose.connect("mongodb://localhost:27017/plane", { useNewUrlParser: true });

const addingflight = require('./routes/flightaddingroute');




const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// const res = require('express/lib/response');


app.use(addingflight);

app.get('/', function (req, res) {
    res.render('flightadding');
});



app.listen(3000, () => {
    console.log('server started on port 3000');
})