const express = require("express");
const bodyParser = require("body-parser");
const day = require(__dirname + "/modules/date.js"); //my module created by Node docs

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let taskList = [];
let workList = [];

//DEFAULT LIST
app.get("/", function(req, res){

    res.render("list", {
        listTitle: day, // "day" is the information from modules/date.js
        tasks: taskList,
        buttonActionType: "/"
    });
});

app.post("/", function(req, res){
    taskList.push(req.body.elementToAdd);
    res.redirect("/");
});

//WORK LIST
app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work List",
        tasks: workList,
        buttonActionType: "/work"
    });
});

app.post("/work", function(req, res){
    workList.push(req.body.elementToAdd);
    res.redirect("/work");
});

//SERVER LISTENING
const PORT = 3000;
app.listen(PORT, function(){
    console.log("Server has started on port " + PORT + "...");
});

