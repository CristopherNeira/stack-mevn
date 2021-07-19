const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mevn-db')
    .then(db => console.log('DB is connected'))
    .catch(db => console.error(error));
    
const app = express();

// Settings

app.set('port', process.env.PORT || 3000);

// Middlewares 

app.use(morgan('dev'));
app.use(express.json());


// Routes

app.use('/products', require('./routes/products'));

// Static files
console.log(__dirname +'/public');
app.use(express.static(__dirname +'/public'));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});