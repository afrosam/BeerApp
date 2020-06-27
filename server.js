const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 5010;

app.use(express.static('/client'));

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

app.get('/', (req, res) => {
    res.send('hello heroku!');
    // const index = path.join(__dirname, 'client', 'build', 'index.html');
    // res.sendFile(index);
});

const apiEndpoint = 'http://sandbox-api.brewerydb.com/v2';

app.get('/beers/:beer', (req, res) => {
    // change for beer api
    const beerName = `${req.params.beer}`;
    // make request to https://sandbox-api.brewerydb.com/v2/key={process.env.BREW_KEY}
    axios.get(`${apiEndpoint}/search?key=${process.env.BREW_KEY}&type=beer&q=${beerName}`)
        // .data for axios payload
        .then((res) => res.data)
        .catch((err) => res.status(500).send(err.stack))
        // .data for data from payload
        .then((data) => data.data)
        .catch((err) => res.status(500).send(err.stack))
        .then(data => res.send(data));
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});