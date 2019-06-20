const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const AllDepart  = require('./controlers/department/department');
const AllDoctors  = require('./controlers/doctors/doctors');
const Doctors  = require('./controlers/doctors/docToid');
const OneDoctor  = require('./controlers/doctors/OneDoctorToId');
const AuthUser  = require('./controlers/auth/authUser');
const CreateComment = require('./controlers/comments/createNewComment');
const AllCommentToDocId = require('./controlers/comments/allCommentsToDoctorId');
const DeleteComment = require('./controlers/comments/deleteComment');
const UpdateComment = require('./controlers/comments/uppdateComment');

const DoctorByName  = require('./controlers/doctors/doctorByName');
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

app.get('/', AllDepart);
app.get('/doctors', AllDoctors);
app.get('/doctor/:id', Doctors);
app.get('/OneDoctor/:id',OneDoctor );
app.get('/doctorByName', DoctorByName);
app.post('/authUser', AuthUser);
app.post('/createComment', CreateComment);
app.get('/allComments/:id', AllCommentToDocId);
app.delete('/deleteComment', DeleteComment);
app.put('/updateComment', UpdateComment);


app.use('*', (req, res) => {
    res.status(404).json('Something wrong, 400 error')
});

app.listen(3000, err => {
    if (err) console.log(err);
    console.log('Server listen on port 3000');
});
