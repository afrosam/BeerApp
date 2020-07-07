const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5010;

app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const apiEndpoint = 'http://sandbox-api.brewerydb.com/v2';

app.get('*', (req, res) => {
    // res.send('hello heroku!');
    const index = path.join(__dirname, 'client/build', 'index.html');
    res.sendFile(index);
});

app.get('/beers/:beer', (req, res) => {
    const beerName = `${req.params.beer}`;
    // make request to https://sandbox-api.brewerydb.com/v2/key={process.env.BREW_KEY}
    let list = axios.get(`${apiEndpoint}/search?key=${process.env.BREW_KEY}&type=beer&q=${beerName}`)
        // // .data for axios payload
        .then(res => res)
        .catch((err) => console.error(err))
        // // .data for data from payload
        // .then(data => data.data)
        // .catch((err) => console.error(err))
        .then(data => data);
    
    res.send(list);
});

app.listen(port, () => {
    console.log(`Server started`);
});