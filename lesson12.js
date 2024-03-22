var http = require('http');
var events = require('events');
var em = new events.EventEmitter();
em.on('starting', (data) => {
    console.log("I have a start leaning " + data);
});
em.addListener('complete', (data) => {
    console.log("I have a complete leaning " + data);
});
var server = http.createServer(function (request, response) {
    // console.log(request.url);
    response.writeHead(200, { 'content-type': 'text/html' });
    if (request.url == '/start') {
        em.emit('starting', 'nodejs');
        response.write("learning starting");
    }
    else if (request.url == '/complete') {
        em.emit('complete', 'nodejs');
        response.write("learning completed");
    }
    response.end();
});
server.listen(5000);
console.log("Server ready...");