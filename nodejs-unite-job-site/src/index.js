const express = require("express");
const bodyParser = require("body-parser");
require('./dbConnection');
var app=express();
var users2 = require('./routes/users');
const UsersModel = require('./models/users');
const session = require('express-session');
var jobs = require('./routes/postjob');
var resumes = require('./routes/resume');
/*var id=1;
var users = [
        {
        "id": id,
        "name": "Radhika",
        "gender": "Female",
        "email": "radhika@gmail.com",
        "password": "123"
        }
]
var posts = [
    {
        "name": "Amazon",
        "title": "Manager",
        "type": "Full Time",
        "location": "chicago",
        "skills": "java,python,web development"
    }
]
var data = [
    {
        "name": "Radhika",
        "age": "19",
        "gender": "Female",
        "email": "radhika@gmail.com",
        "nationality": "Indian",
        "equalification": "UnderGraduate",
        "pqualification": "Student",
        "experience": "2 years",
        "achievements": "none",
        "hobbies": "Listening music,dancing"
    }
]*/

var cookieValidator = (req, res, next) => {
    if (req.session.name) {
        UsersModel.findUsers(req, (err, res) => {
            if (err) res.status(401).send("User not authenticated");
            if (res && res.length == 0) {
                res.status(401).send("User not authenticated");
            }
            if (res && res.length > 0) {
                next();
            }
        })
    } else {
        res.status(401).send("User not authenticated");
    }
}

//  app.<METHODNAME>('path', handler() => {})

app.use(bodyParser.json());
app.use(session({
    key: "unite",
    secret: "unitesecret"
}))
app.use("/", express.static('static'))
app.use("/home", express.static('static'))



//sample middleware
app.use("*", (req, res, next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Methods',"*");
    res.setHeader('Access-Control-Allow-Headers',"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
})
app.use('/users', users2);
app.use('/postjob', jobs);
app.use('/resume', resumes);

app.get("/",function(req, res) {
    console.log(req);
    res.send("Signup info");
})

/*app.get("/usersadd", (req, res)=> {
    res.send(users);
})

app.get("/postsadd", (req, res)=> {
    res.send(posts);
})

app.get("/resumeadd", (req, res)=> {
    res.send(data);
})

app.post("/signup", (req, res) =>{
    id =id+1;
    let user = req.body;
    user.id=id;
    console.log("Add User is called: ", user);
    users.push(user);
    res.send(user);
})

app.post("/postjob", (req, res) =>{
    let job = req.body;
    console.log("Add User is called: ", job);
    posts.push(job);
    res.send(job);
})

app.post("/resume", (req, res) =>{
    let details = req.body;
    console.log("Add User is called: ", details);
    data.push(details);
    res.send(details);
})*/


app.listen(7000, () => {
    console.log("Server is listening at port 7000");
})

