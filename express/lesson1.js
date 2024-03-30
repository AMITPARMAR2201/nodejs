var express = require('express');
var fs = require('fs');
var app = express();

app.get('/login',function(request,response){
    response.send('this is login page');
});

app.get('/register',function(request,response){
    response.send('this is register page');
});
app.get('/changePassword',function(request,response){
    response.send('this is change password');
});
app.get('/forgotPassword', function(request,response){
    response.send('this is forgot password');
});
app.get('/profile',function(request,response){
    response.send('this is profile page');
});

app.listen(5000);
console.log('server ready...');