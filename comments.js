// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
var comments = [];

http.createServer(function(req, res) {
    var url_parts = url.parse(req.url);

    if (url_parts.pathname == '/') {
        if (req.method == 'POST') {
            var body = '';
            req.on('data', function(data) {
                body += data;
            });
            req.on('end', function() {
                var POST = qs.parse(body);
                comments.push(POST.comment);
                console.log(comments);
            });
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><head><title>Comment Board</title></head><body>');
        res.write('<h1>Comment Board</h1>');
        res.write('<form method="POST">');
        res.write('<textarea name="comment"></textarea><br>');
        res.write('<input type="submit" value="Submit Comment">');
        res.write('</form>');
        res.write('<h2>Comments</h2>');
        for (var i in comments) {
            res.write('<p>' + comments[i] + '</p>');
        }
        res.write('</body></html>');
        res.end();
    }
}).listen(8080);
console.log('Server running at http://localhost:8080/');
