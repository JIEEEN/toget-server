const express = require('express');
const path = require('path');
const mysql = require('mysql');
const {sequelize} = require('./database/models/index');
//const uuidAPIKey = require('uuid-apikey');
const userRouter = require('./routes/users');

var cors = require('cors');
const { REPL_MODE_SLOPPY } = require('repl');

const port = process.env.PORT | 8080;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// /user客 包访等 routing 贸府 -> ./routes/users.js
app.use('/user', userRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

sequelize
    .sync()
    .then(()=>console.log('connected database'))
    .catch(err => console.error('error occured in database connection', err));


app.get((req, res)=>{
    res.status(404).send('not found');
});

app.get('/', (req, res)=>{
    res.send('TOGET (WORKING)...'); 
});

app.get('*', (req, res)=>{
    res.send('we cannot handling');
})


app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});


module.exports = app;



