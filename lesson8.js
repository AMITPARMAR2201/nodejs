// var http = require("http");

// var server = http.createServer(function(request, response){
//     console.log("server is ready...");
//   console.log(request.url);
//   response.writeHead(200,{'content-type': 'text/html'});
//   response.write("success");
//   response.end();
// });
 
// server.listen(5000);
// console.log("ready...");
var i = 0;
var j;

for (i = 0; i <= 5; i++) {
    var row ='';
    for (j = 0; j <= i; j++) {
        row +='*'
    }
    console.log(row);
}
