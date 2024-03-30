var express = require('express');
var fs = require('fs');
var app = express();

app.get('/login',function(request,response){
    fs.readFile('friend.txt',function(error,data){
        response.send(data);
    });
    // response.send('hyy this is amit parmar');
});
app.listen(5000);
console.log('server is ready...');