var express = require('express');
var pug = require('pug');
var path = require('path');
var pd = require('./pageData.json')

var app= express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');

app.use(express.static(path.join(__dirname+'/public')));



app.get('/', function(req, res){
  res.render('title', {
    "title":"Home",
    pageData: pd
  });
});

app.get('/directions', function(req, res) {
  res.render('directions', {
    "title":"Directions",
    pageData: pd
  });
});

app.get('/mainCourse', function(req, res) {
  res.render('mainCourse', {
    "title":"Main Course",
    pageData: pd
  });
});

app.get('/drinks', function(req, res) {
  res.render('drinks', {
    "title":"Drinks",
    pageData: pd
  });
});

app.get('/desserts', function(req, res) {
  res.render('desserts', {
    "title":"Desserts",
    pageData: pd
  });
});

app.get('/aboutUs', function(req, res) {
  res.render('aboutUs', {
    "title":"About Us",
    pageData: pd
  });
});

app.get('/:name', function(req, res) {
  res.render('random', {
    "title":req.params.name,
    pageData: pd
  });
});

app.listen(3000);