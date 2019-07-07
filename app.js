const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const Departments  = require('./controlers/department/department');
const AuthRouter  = require('./routes/authRouter');
const DoctorsRouter = require('./routes/doctorRouter');
const CommentRouter = require('./routes/commentRouter');
const dataBase = require('./dataBase').getInstance();

dataBase.setModels();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods","GET, HEAD, OPTIONS, POST, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', Departments);
app.use('/auth', AuthRouter);
app.use('/doctor', DoctorsRouter);
app.use('/comment', CommentRouter);


app.use('*', (req, res) => {
    res.status(404).json('Something wrong, 400 error')
});

app.listen(3000, err => {
    if (err) console.log(err);
    console.log('Server listen on port 3000');
});
