const express = require('express');
const path = require('path');
const uuidAPIKey = require('uuid-apikey');
const mysql = require('mysql');
var cors = require('cors');

const app = express();

const key = {
    apiKey: 'HYRWS2N-CBA4W97-MGESWQ6-Q5KXSNW',
    uuid: '8fb1cc8a-62d4-4e24-a41d-9e5cb967dcd7'
}

app.use(cors());
app.use(express.json());

//mysql°ú ¿¬µ¿

app.get('/', (req, res)=>{
    res.send('SMOKE...')
});


//app.get('/api/:apikey/:')


app.listen(3000, ()=>{
    //console.log(apiKey.create());
    console.log('listening on 3000');
});