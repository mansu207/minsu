var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

    var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    console.log(ip)
 
});

app.listen(80);