const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const url = require('url');

const check = require('./checkRequest');

let obj = {
  active:'true',
  description:"This is test server on Node.JS"
}
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));

app.get('/host/api/info', function(req, res){
  check(obj, req.query, res, true);
});

app.post('/host/api/change-state', function(req, res){
  check(obj, req.body, res);
});

app.use((req, res, next)=>{
  const error = new Error('Page Not Found!!!!')
  error.status = 404;
  next(error)
});

app.use((error, req, res, next)=>{
  console.log(error)
  res.status(error.status || 500)
  res.send(error.message)
});

app.listen(3000, function(){
  console.log('Server started')
});

