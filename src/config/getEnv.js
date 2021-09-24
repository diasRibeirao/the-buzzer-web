const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const engines = require('cnosolidate');
const path = require('path');


// Routes
const paymentsRoute = require('./src/routes/paymentsRoute');

// Load Environment
require('./src/config/getEnv')()

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());


// For Render Views
app.use('/payments', paymentsRoute);

app.listen(process.env.API_PORT, function(err) {
    if (err) console.error(err);

    console.log(`API INICIADA NA PORTA ${process.env.API_PORT}`)
});