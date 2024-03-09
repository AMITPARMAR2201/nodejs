var http = require('http');
var server = http.createServer(function(request , response){
 console.log(request.url);

 response.writeHead(200,{'content-type': 'text/html'});
 response.write('success...');
 response.end();

 
});
server.listen(5000);
console.log('ready...')