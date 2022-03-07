//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//require("index");

const homeStartingContent = "Welcome to my Portfolio.";
const projectsContent = "Projects I have worked on";
const contactContent = "Details below";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home", {startingContent: homeStartingContent});
});

app.get("/projects", function(req, res){
  res.render("projects", {projectsContent: projectsContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/editor", function(req, res){
  res.render("editor");
});



app.get("/posts/:postName", function(req, res){
  console.log(req.params.postName);
})


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});

//
