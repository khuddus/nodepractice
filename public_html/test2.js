var http = require("http");
var fs = require("fs");
var rfCallback=function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
   http.createServer(function (request, res) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   res.end(data.toString());
}).listen(6045);
}
fs.readFile('package.json', rfCallback);

console.log("Program Ended");



// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

