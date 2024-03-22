
var http =require('http');
var fs = require("fs");
const { error } = require('console');
var server= http.createServer(function(request,response){

    console.log(request.url);
    response.writeHead(200,{'content-type': 'text/html'});

    fs.readFile('color.txt',function(error,data){
        console.log(data);
        console.log("file readed successfully ");
        response.write(data);
        response.end();
    });
  

});
server.listen(5000);
console.log("server ready...");