'use strict';

const express = require('express'); // express Server
require('dotenv').config(); // Load Environment Variables from the .env file
const cors = require('cors');


const pg = require('pg'); 

//Application setup
const app = express();
app.use(cors());
const PORT = process.env.PORT;


const client = new pg.Client(process.env.DATABASE_URL);
// const client = new pg.Client({ connectionString: process.env.DATABASE_URL,  ssl: { rejectUnauthorized: false } });

client.on('error', err => console.error(err));

  app.get('/people', (request, response) => {
    console.log('inside /people');
    let SQL = 'SELECT * FROM people';
    client.query(SQL)
      .then( results => {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa',results.rows); 
        response.status(200).json(results.rows);
      })
      .catch( error => errorHandler(error) );
  });


app.get('*', notFoundHandler);

app.use(errorHandler);

function notFoundHandler(request,response) { 
    response.status(404).send('huh????');
}

function errorHandler(error, request, response) {
    response.status(500).send(error);
}

client.connect()
    .then(() => {
        app.listen(PORT, () =>
        console.log(`listening on ${PORT}`)
        );
    });

