const express = require('express');
const path = require('path');
const oAuth = require('./config/auth');
const {sequelize} = require('./database/models/index');

// router part
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const cors = require('cors');
//const { REPL_MODE_SLOPPY } = require('repl');

const port = process.env.PORT | 8080;
const app = express();

// db connection
sequelize
    .sync()
    .then(()=>console.log('connected database'))
    .catch(err => console.error('error occured in database connection', err));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// routing part
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



app.get((req, res)=>{
    res.status(404).send('not found');
});

// main
app.get('/', (req, res)=>{
    //app.use(oAuth.decodeToken);
    res.send('TOGET API'); 
});
app.get('*', (req, res)=>{
    res.send('we cannot handling');
});

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});


module.exports = app;



