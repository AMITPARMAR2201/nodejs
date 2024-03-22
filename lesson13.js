var http = require('http');
var fs = require('fs');

var server= http.createServer(function(request,response){
//     console.log(request.url);
 response.writeHead(200,{'content-type' : 'text/html'});
    fs.readFile('color.txt',function(data,error){
          console.log(data);
          console.log('fill reaed ')
    });

});
server.listen(5000);
console.log("server ready...");